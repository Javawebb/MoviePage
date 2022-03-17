import React from 'react'

export const Movie = () => {
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
        <div className="">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <div class="badge badge-error gap-2 mt-2">8.9 &#10029;</div>
            </div>
            <div className="divider"></div>
        <ul className='mt-5 flex flex-col gap-2'>
            <h1 className='text-2xl font-bold mb-2 text-succes'>About Movie</h1>
            <li>Original-Title: <strong>Spider-Man Far from Home</strong></li>
            <li>Popularity: <strong>50,000,000</strong></li>
            <li>Votes: <strong>20,000</strong></li>
            <li>Realise-date: <strong>2019-06-26</strong></li>
            <li>Language: <strong>ENG</strong></li>
        </ul>
        <div className="divider mt-5"></div>
        <p className="text-lg">Spider-Man: Far From Home is a 2019 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and the 23rd film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts, written by Chris McKenna and Erik Sommers, and stars Tom Holland as Peter Parker / Spider-Man, alongside Samuel L. Jackson, Zendaya, Cobie Smulders, Jon Favreau, J. B. Smoove, Jacob Batalon, Martin Starr, Marisa Tomei, and Jake Gyllenhaal.</p>
    </div>
  </div>
</div>
    </div>
  )
}
