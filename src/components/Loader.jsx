import '../css/loader.css'
const Loader = () =>{
    return (
    <template id="card-template">
    <div className="card">
      <div className="header">
        <img className="header-img skeleton" src="https://source.unsplash.com/100x100/?nature" />
        <div className="title" data-title>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </div>
      <div data-body>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
      </div>
    </div>
  </template>
    )
}

export default Loader;