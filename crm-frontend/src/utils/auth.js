// src/utils/auth.js
export function isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }
  
  export function getUserRole() {
    return localStorage.getItem("role");
  }
  