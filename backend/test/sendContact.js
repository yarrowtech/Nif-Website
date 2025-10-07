#!/usr/bin/env node
// Simple script to POST a test contact to the backend using native http/https
import { request as httpRequest } from 'http';
import { request as httpsRequest } from 'https';
import { URL } from 'url';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

const payload = {
  name: 'Test User',
  number: '9999999999',
  email: 'test@example.com',
  course: 'Testing 101',
  message: 'This is a test from sendContact.js',
};

function postJson(urlString, data) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlString);
    const body = JSON.stringify(data);
    const options = {
      method: 'POST',
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + url.search,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = (url.protocol === 'https:' ? httpsRequest : httpRequest)(options, (res) => {
      let raw = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => (raw += chunk));
      res.on('end', () => {
        const contentType = res.headers['content-type'] || '';
        const isJSON = contentType.includes('application/json');
        try {
          const parsed = isJSON ? JSON.parse(raw) : { text: raw };
          resolve({ status: res.statusCode, body: parsed });
        } catch (err) {
          resolve({ status: res.statusCode, body: raw });
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.write(body);
    req.end();
  });
}

async function run() {
  try {
    const res = await postJson(`${BACKEND_URL}/api/contact`, payload);
    console.log('Status:', res.status);
    console.log('Response:', res.body);
  } catch (err) {
    console.error('Request failed:', err.message || err);
  }
}

run();
