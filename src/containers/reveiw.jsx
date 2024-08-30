import React, { useState } from "react";
import { MessageSquareDiff } from "lucide-react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      username: "John Doe",
      rating: 4,
      comment: "Great room, very clean and comfortable!",
    },
    {
      id: 2,
      username: "Jane Smith",
      rating: 5,
      comment: "Loved the amenities and the location!",
    },
  ]);

  const [newReview, setNewReview] = useState({
    username: "",
    rating: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    rating: false,
    comment: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));

    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleAddReview = () => {
    const newErrors = {
      username: !newReview.username,
      rating: !newReview.rating,
      comment: !newReview.comment,
    };

    if (!newErrors.username && !newErrors.rating && !newErrors.comment) {
      const newId = reviews.length ? reviews[reviews.length - 1].id + 1 : 1;
      setReviews([
        ...reviews,
        { ...newReview, id: newId, rating: parseInt(newReview.rating) },
      ]);
      setNewReview({ username: "", rating: "", comment: "" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg border border-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <MessageSquareDiff className="h-5 w-5 mr-2 text-secondary-color" />
          Reviews
        </h2>
      </div>

      {/* Review List */}
      <div className="mb-6">
        {reviews.map((review) => (
          <div key={review.id} className="mb-4 border-b pb-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold text-secondary-color">
                {review.username}
              </h3>
              <span className="text-yellow-500">
                {"★".repeat(review.rating)}
              </span>
            </div>
            <p className="text-gray-700 text-sm">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="p-4 bg-gray-100 rounded-md">
        <h3 className="text-lg font-semibold mb-4">Add a Review</h3>

        <div className="flex gap-2">
          <input
            type="text"
            name="username"
            placeholder="Your name"
            value={newReview.username}
            onChange={handleInputChange}
            className={`w-full p-2 mb-4 border rounded-lg ${
              errors.username ? "border-red-500" : ""
            }`}
          />
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            className={`w-full p-2 mb-4 border rounded-lg ${
              errors.rating ? "border-red-500" : ""
            }`}
          >
            <option value="">Rate the room</option>
            <option value="5">★★★★★</option>
            <option value="4">★★★★☆</option>
            <option value="3">★★★☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="1">★☆☆☆☆</option>
          </select>
        </div>
        <textarea
          name="comment"
          placeholder="Your review"
          value={newReview.comment}
          onChange={handleInputChange}
          className={`w-full p-2 mb-4 border rounded-lg ${
            errors.comment ? "border-red-500" : ""
          }`}
        />
        <button
          onClick={handleAddReview}
          className="bg-primary-color w-full text-white p-2 rounded-lg"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
