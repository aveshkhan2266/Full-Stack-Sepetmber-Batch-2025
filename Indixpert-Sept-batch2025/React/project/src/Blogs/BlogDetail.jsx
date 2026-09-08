import { Fragment } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Bolgdata } from '../data/Bolgdata';
import HighlightText from './Highlighttext';

function BolgDetail() {
    const { id } = useParams();
    const location = useLocation();

    const searchValue = location.state?.search || '';


    const blog = Bolgdata.find((item) => item.id == id);

    if (!blog) {
        return <h2>Blog not found</h2>;
    }

    return (
        <Fragment>
            <h1 className="mb-4 mt-3 text-decoration-underline">Blog Detail</h1>

            <h2 className="mb-3">
                <HighlightText
                    text={blog.title}
                    search={searchValue}
                />
            </h2>

            <img
                src={blog.image}
                height={300}
                width={500}
                className="mb-3"
                alt={blog.title}
            />

            <p>
                <HighlightText
                    text={blog.body}
                    search={searchValue}
                />
            </p>
        </Fragment>
    );


}

export default BolgDetail;