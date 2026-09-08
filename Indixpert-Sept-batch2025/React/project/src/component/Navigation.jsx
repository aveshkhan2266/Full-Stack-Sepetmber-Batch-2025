import { Link, NavLink } from 'react-router-dom';
import { NoneInteractiveLink, NoneInteractiveComponent, InteractiveComponent, FormData, Contextapi } from '../data/Navigationdata';
import Accordion from 'react-bootstrap/Accordion';
import { ArrowRight } from 'react-bootstrap-icons';
function Navigation() {
    return (

        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Small Assignment</Accordion.Header>
                <Accordion.Body>
                    <ul className="nav flex-column navigation">
                        {NoneInteractiveLink.map((menu) => (
                            <li className="nav-item" key={menu.id}>

                                <NavLink className="nav-link d-flex gap-2 text-success " to={menu.path}>
                                    <ArrowRight className='mt-1' />
                                    {menu.elementname}

                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Non Interactive Component</Accordion.Header>
                <Accordion.Body>

                    <ul className="nav flex-column navigation">
                        {NoneInteractiveComponent.map((menu) => (
                            <li className="nav-item" key={menu.id}>
                                <NavLink className="nav-link d-flex gap-2 text-success" to={menu.path}>
                                    <ArrowRight className='mt-1' />
                                    {menu.elementname}

                                </NavLink>

                            </li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Interactive Component</Accordion.Header>
                <Accordion.Body>

                    <ul className="nav flex-column navigation">
                        {InteractiveComponent.map((menu) => (
                            <li className="nav-item" key={menu.id}>
                                <NavLink className="nav-link d-flex gap-2 text-success" to={menu.path}>
                                    <ArrowRight className='mt-1' />
                                    {menu.elementname}

                                </NavLink>

                            </li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Form</Accordion.Header>
                <Accordion.Body>

                    <ul className="nav flex-column navigation">
                        {FormData.map((menu) => (
                            <li className="nav-item" key={menu.id}>
                                <NavLink className="nav-link d-flex gap-2 text-success" to={menu.path}>
                                    <ArrowRight className='mt-1' />
                                    {menu.elementname}

                                </NavLink>

                            </li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>Context</Accordion.Header>
                <Accordion.Body>

                    <ul className="nav flex-column navigation">
                        {Contextapi.map((menu) => (
                            <li className="nav-item" key={menu.id}>
                                <NavLink className="nav-link d-flex gap-2 text-success" to={menu.path}>
                                    <ArrowRight className='mt-1' />
                                    {menu.elementname}

                                </NavLink>

                            </li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>

    );
}
export default Navigation;