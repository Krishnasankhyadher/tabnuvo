// Helper to get auth headers for admin API calls
export const getAuthHeaders = () => {
    const token = localStorage.getItem("adminToken");
    return {
        Authorization: token ? `Bearer ${token}` : "",
    };
};

// Authenticated fetch wrapper
export const authFetch = async (url, options = {}) => {
    const token = localStorage.getItem("adminToken");
    const headers = {
        ...options.headers,
        Authorization: token ? `Bearer ${token}` : "",
    };

    // Don't set Content-Type for FormData (browser sets it with boundary)
    if (!(options.body instanceof FormData)) {
        headers["Content-Type"] = headers["Content-Type"] || "application/json";
    }

    const res = await fetch(url, { ...options, headers });

    // If token expired/invalid, redirect to login
    if (res.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("isAdmin");
        window.location.href = "/admin";
        throw new Error("Session expired. Please log in again.");
    }

    return res;
};
