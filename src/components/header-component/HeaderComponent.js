import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about"><a class="nav-link" href="#">About</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/help"><a class="nav-link" href="#">Help</a></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default HeaderComponent;