import '../styles/ArtPage.css';

var PreviouseClickIndex = 0;

function expandArtPiece(index) {
    const resetPrevious = document.getElementById("Button" + PreviouseClickIndex);
    resetPrevious.style.backgroundColor = "red";
    resetPrevious.style.zIndex = "0";

    const clickedButton = document.getElementById("Button" + index);
    clickedButton.style.backgroundColor = "black";
    clickedButton.style.zIndex = "1";

    PreviouseClickIndex = index;

    console.log("Malo: PreviouseClickIndex: " + PreviouseClickIndex)
}
function Art() {
    const basePath = "../../public/Icons/"


    const images = [
        [
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png"
        ],
        [
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png"
        ],
        [
            basePath + "star.png",
            basePath + "star.png",
            basePath + "star.png",
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
                        <img className="ArtPiece" id={'Button' + index} src={images[0][index]} alt="Art piece" key={index}
                            onClick={() => expandArtPiece(index)} 
                        />
                    )

                }
                </div>
                <div className="Row2">{
                    Array(7).fill().map((_, index) =>
                        <img className="ArtPiece" id={'Button' + (index + 6)} src={images[1][index]} alt="Art piece" key={index}
                            onClick={() => expandArtPiece(index + 6)} 
                        />
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default Art;