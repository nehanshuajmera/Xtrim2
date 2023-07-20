import React from 'react'
import './Home.css'
export default function page() {
  return (
    <div >
      <div>
        <div class="carousel">
          <ul class="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li class="slide-container">
              <div class="slide-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg"></img>
              </div>
              <div class="carousel-controls">
                <label for="img-3" class="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-2" class="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />
            <li class="slide-container">
              <div class="slide-image">
                <img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true"></img>
              </div>
              <div class="carousel-controls">
                <label for="img-1" class="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-3" class="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-3" />
            <li class="slide-container">
              <div class="slide-image">
                <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg"></img>
              </div>
              <div class="carousel-controls">
                <label for="img-2" class="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-1" class="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <div class="carousel-dots">
              <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
              <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
              <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
            </div>
          </ul>
        </div>
      </div>
      <div className="number" >
        <div>
          <span className="xyz">
            2424
          </span>
          <p className="abc">
            Community-made UI elements
          </p>
        </div>
        <div>
          <span className="xyz">
            2424
          </span>
          <p className="abc">
            Community-made UI elements
          </p>
        </div>
        <div>
          <span className="xyz">
            2424
          </span>
          <p className="abc"ś>
            Community-made UI elements
          </p>
        </div>
      </div>
      <div className="group">
        <div class="card">
          <div class="infos">
            <div class="image"></div>
            <div class="info">
              <div>
                <p class="name">
                  Join our Telegram Channel
                </p>
              </div>
              <div class="stats">
                <p class="flex flex-col">
                  Articles
                  <span class="state-value">
                    34
                  </span>
                </p>
                <p class="flex">
                  Followers
                  <span class="state-value">
                    455
                  </span>
                </p>

              </div>
            </div>
          </div>
          <button class="request" type="button">
            Join
          </button>
        </div>
      </div>
    </div>

  )
}