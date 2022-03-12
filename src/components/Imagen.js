const Imagen = ({imagen}) => {

    // Extraer las variables
    const {largeImageURL, likes, previewURL, tags, views} = imagen;

    return (  
        <div className="col-12 colsm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="cars-img-top"/>
            </div>

            <div className="card-body">
                <p className="card-text">{likes} Me gusta</p>
                <p className="card-text">{views} Vistas</p>
            </div>

            <div className="card-footer">
                <a
                    href={largeImageURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-block"
                >ver Imagen</a>
            </div>

        </div>
    );
}
 
export default Imagen;