import { Children, isValidElement, useEffect, useMemo } from "react";

const toText = value => {
  if (value === null || value === undefined) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(toText).join("");
  return "";
};

const cloneAttributes = props => {
  const attrs = {};
  Object.entries(props || {}).forEach(([key, value]) => {
    if (key === "children" || value === undefined) return;
    attrs[key] = value;
  });
  return attrs;
};

const applyNode = descriptor => {
  if (descriptor.type === "title") {
    const prev = document.title;
    document.title = toText(descriptor.props.children);
    return () => {
      document.title = prev;
    };
  }

  const el = document.createElement(descriptor.type);
  const attrs = cloneAttributes(descriptor.props);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  document.head.appendChild(el);
  return () => {
    el.remove();
  };
};

export const HelmetProvider = ({ children }) => children;

export const Helmet = ({ children }) => {
  const descriptors = useMemo(() => {
    return Children.toArray(children)
      .filter(isValidElement)
      .map(child => ({
        type: child.type,
        props: child.props,
      }));
  }, [children]);

  useEffect(() => {
    const cleanups = descriptors.map(applyNode);
    return () => {
      cleanups.reverse().forEach(dispose => {
        if (typeof dispose === "function") dispose();
      });
    };
  }, [descriptors]);

  return null;
};
