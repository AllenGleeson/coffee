import React from 'react';
import '../../assets/css/book.css'

const Book = () => {
    return (
        <section className='book-section'>
            <div id='book'>
                <div id='top'></div>
                <div id='front'></div>
                <div id='right'></div>
                <div id='bottom'></div>
                <div id='shadow'></div>
                <div id='bookmark'>
                    <div>
                        <div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='bookmark-shadow'></div>
            </div>
            <div id='flip'>
                <div id='front'>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='back'>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Book;