import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer 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`
  }
})