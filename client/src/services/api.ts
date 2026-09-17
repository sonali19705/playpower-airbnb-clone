const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getListing = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/listings/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch listing");
  }

  const result = await response.json();

  return result.data;
};

export const getReviews = async (listingId: string) => {
  const response = await fetch(
    `${API_BASE_URL}/listings/${listingId}/reviews`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }

  const result = await response.json();

  return result.data;
};

export const getAvailability = async (listingId: string) => {
  const response = await fetch(
    `${API_BASE_URL}/listings/${listingId}/availability`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch availability");
  }

  const result = await response.json();

  return result.data;
};