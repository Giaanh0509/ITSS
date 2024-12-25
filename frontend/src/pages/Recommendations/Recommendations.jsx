import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Login/AuthProvider";
import axios from "../../axios";
import "./Recommendations.css";

const Recommendations = () => {
    const { authState } = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                if (!authState.username) {
                    console.warn("Username is missing in authState");
                    return;
                }
                setLoading(true);
                const response = await axios.get(`/recommendations?username=${authState.username}`);
                setRecommendations(response.data || []);
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, [authState.username]);

    return (
        <div className="recommendations-container">
            <h1>{authState.username}のメニュ一提案画面</h1>
            {loading ? (
                <p>データの読み込み。。。</p>
            ) : recommendations.length > 0 ? (
                <div className="recommendations-grid">
                    {recommendations.map((food) => (
                        <div className="recommendation-item" key={food.id}>
                            {food.imageBase64 ? (
                                <img
                                    src={`data:image/jpeg;base64,${food.imageBase64}`}
                                    alt={food.name}
                                    className="recommendation-image"
                                />
                            ) : (
                                <div className="placeholder-image">No Image</div>
                            )}
                            <h3>{food.name}</h3>
                            <p>{food.description}</p>
                            <p>Price: ${food.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>なし</p>
            )}
        </div>
    );
};

export default Recommendations;
