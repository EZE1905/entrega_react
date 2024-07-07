import React from "react";
import "./main.css";

export default function Main() {
    return (
        <div className="main">
            <div className="card">
                <img
                    className="card-img"
                    src="https://m.media-amazon.com/images/I/51cPOOgzp0L.jpg"
                    alt="iPhone"
                />
                <div className="card-title">iPhone 11</div>
                <div className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button className="btn">Comprar</button>
            </div>
            <div className="card">
                <img
                    className="card-img"
                    src="https://m.media-amazon.com/images/I/61i8Vjb17SL.jpg"
                    alt="iPhone"
                />
                <div className="card-title">iPhone 13 Pro Max</div>
                <div className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button className="btn">Comprar</button>
            </div>
            <div className="card">
                <img
                    className="card-img"
                    src="https://i5.walmartimages.com/asr/fee4af78-110f-467c-86d2-6d6f27ba1afe.8422413b3b9eb231cea3f43d11a5a5c4.jpeg"
                    alt="iPhone"
                />
                <div className="card-title">Iphone 14 Pro Max</div>
                <div className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button className="btn">Comprar</button>
            </div>
            <div className="card">
                <img
                    className="card-img"
                    src="https://mac-center.com.pr/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-US_1445x.jpg?v=1700559459"
                    alt="iPhone"
                />
                <div className="card-title">Iphone 15 Pro Max</div>
                <div className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button className="btn">Comprar</button>
            </div>
        </div>
    );
}
