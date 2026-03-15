import '../styles/ArtPage.css';


function Art() {
    const basePath = "../../public/Icons/"


    const images = [
        [
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png"
        ],
        [
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png"
        ],
        [
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png"
        ]
    ];

    return (
        <div className="Art" id="Art">
            <h1>ART</h1>

            <div className="GalleryContainer">
                <div className="Row1">{
                    Array(6).fill().map((_, index) =>
                        <img className="ArtPiece" src={images[0][index]} alt="Art piece" key={index} />
                    )

                }
                </div>
                <div className="Row2">{
                    Array(7).fill().map((_, index) =>
                        <img className="ArtPiece" src={images[1][index]} alt="Art piece" key={index} />
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default Art;