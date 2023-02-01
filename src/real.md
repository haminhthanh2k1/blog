<nav class="navbar navbar-expand-lg navbar-light header">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button class="navbar-toggler" onClick={handleClick}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scroll-skills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scroll-skills">
                Career
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#scroll-education">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scroll-education">
                Hobby
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>