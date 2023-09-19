import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiInstagram } from 'react-icons/fi';

const InstagramEmbed = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'ACCESS_TOKEN' and 'USER_ID' with your Instagram API credentials
    const accessToken = 'YOUR_ACCESS_TOKEN';
    const userId = 'YOUR_USER_ID';
    const url = `https://graph.instagram.com/v12.0/${userId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}&limit=1`;

    // Fetch Instagram data
    const fetchInstagramData = async () => {
        try {
            const response = await axios.get(url);
            setPosts(response.data.data);
        } catch (error) {
            console.error('Error fetching Instagram data:', error);
            console.error('Error response data:', error.response?.data); // Log the error response
            setError('Error fetching Instagram data. Please try again later.');
        }                 
    };

    // Fetch Instagram data when the component mounts
    fetchInstagramData();
  }, []); // No dependency array for fetching data on every render

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseDetails = () => {
    setSelectedPost(null);
  };

  return (
    <div className="instagram-posts">
      {error && <p className="error-message">{error}</p>}
      {posts.map((post) => (
        <div key={post.id} className="post" onClick={() => handlePostClick(post)}>
          <img src={post.thumbnail_url} alt={post.caption} />
        </div>
      ))}
      {selectedPost && (
        <div className="post-details">
          <div className="close-button" onClick={handleCloseDetails}>
            <FiInstagram />
          </div>
          <img src={selectedPost.media_url} alt={selectedPost.caption} />
          <p>{selectedPost.caption}</p>
          <p>Date: {new Date(selectedPost.timestamp).toLocaleDateString()}</p>
          <a href={selectedPost.permalink} target="_blank" rel="noopener noreferrer">
            View on Instagram
          </a>
        </div>
      )}
    </div>
  );
};

export default InstagramEmbed;
