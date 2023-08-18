export default function MovieDetail({movie, error}) {
    return (

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {movie?.Title}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <p className="fw-bold">Trama:</p>
              {movie?.Plot}
                {error}   
            </div>
            <div className="modal-body">
            <p className="fw-bold">Anno:</p>
            {movie?.Year}
            </div>
            <div className="modal-body">
            <p className="fw-bold">Durata:</p>
            {movie?.Runtime}
            </div>
            <div className="modal-body">
            <p className="fw-bold">Genere:</p>
            {movie?.Genre}
            </div>
            <div className="modal-body">
            <p className="fw-bold">Regista:</p>
            {movie?.Director}
            </div>
            <div className="modal-body">
            <p className="fw-bold">Attori:</p>
            {movie?.Actors}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Chiudi</button>
            </div>
          </div>
        </div>
      </div>
    );
  }