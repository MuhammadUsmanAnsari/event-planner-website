import React from 'react'

export default function Blogs() {
    return (
        <>
            <div className="container mb-5">
                <h1 className='text-info text-center mb-5 top-space'><u>BLOGS</u></h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card shadow h-100">
                            <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80" class="card-img-top" height="236px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Concert Event</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow h-100">
                            <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80" class="card-img-top" height="236px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">College Party Event</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow h-100">
                            <img src="https://static.wixstatic.com/media/9a90d8_d65df7a0263c4e4d8bfe276c01776e62~mv2.jpg/v1/crop/x_105,y_33,w_885,h_735/fill/w_580,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/new%20wed%201280%20(03).jpg" class="card-img-top" height="236px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Wedding Events</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
