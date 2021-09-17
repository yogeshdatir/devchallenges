import React from "react";
import Button from "../buttons/Button";
import Footer from "../Footer";
import "./ButtonsPage.css";

interface Props {}

const ButtonsPage = (props: Props) => {
  return (
    <div className="container">
      <p className="header">Buttons</p>

      <div className="row">
        <div className="block">
          <p className="tags">{`<Button />`}</p>
          <Button />
        </div>
        <div className="block">
          <p className="tags">{`&:hover, &:focus`}</p>
          <Button hover />
        </div>
      </div>

      <div className="row">
        <div className="block">
          <p className="tags">{`<Button variant=”outline” />`}</p>
          <Button variant="outline" />
        </div>
        <div className="block">
          <p className="tags">{`&:hover, &:focus`}</p>
          <Button variant="outline" hover />
        </div>
      </div>

      <div className="row">
        <div className="block">
          <p className="tags">{`<Button variant=”text” />`}</p>
          <Button variant="text" />
        </div>
        <div className="block">
          <p className="tags">{`&:hover, &:focus`}</p>
          <Button variant="text" hover />
        </div>
      </div>

      <div className="row">
        <div className="block">
          <p className="tags">{`<Button disableShadow />`}</p>
          <Button disableShadow />
        </div>
      </div>

      <div className="row">
        <div className="block">
          <p className="tags">{`<Button disabled />`}</p>
          <Button disabled>Disabled</Button>
        </div>
        <div className="block">
          <p className="tags">{`<Button variant=”text” disabled />`}</p>
          <Button variant="text" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="block" style={{ minWidth: 300 }}>
          <p className="tags">{`<Button startIcon=”local_grocery_store” />`}</p>
          <Button color="primary" startIcon="local_grocery_store" />
        </div>
        <div className="block">
          <p className="tags">{`<Button endIcon=”local_grocery_store” />`}</p>
          <Button color="primary" endIcon="local_grocery_store" />
        </div>
      </div>

      <div className="row">
        <div className="block">
          <p className="tags">{`<Button size=”sm” />`}</p>
          <Button color="primary" size="sm" />
        </div>
        <div className="block">
          <p className="tags">{`<Button size=md />`}</p>
          <Button color="primary" size="md" />
        </div>
        <div className="block">
          <p className="tags">{`<Button size=lg />`}</p>
          <Button color="primary" size="lg" />
        </div>
      </div>

      <div className="row">
        <div className="block">
          <p className="tags">{`<Button color=”default” />`}</p>
          <Button color="default" />
        </div>
        <div className="block">
          <p className="tags">{`<Button color=”primary” />`}</p>
          <Button color="primary">Primary</Button>
        </div>
        <div className="block">
          <p className="tags">{`<Button color=”secondary” />`}</p>
          <Button color="secondary">Secondary</Button>
        </div>
        <div className="block">
          <p className="tags">{`<Button color=”danger” />`}</p>
          <Button color="danger">Danger</Button>
        </div>
      </div>

      <div className="row">
        <div className="block">
          <p className="tags">{`&:hover, &:focus`}</p>
          <Button color="default" hover />
        </div>
        <div className="block">
          <Button color="primary" style={{ marginTop: "2.4rem" }} hover>
            Primary
          </Button>
        </div>
        <div className="block">
          <Button color="secondary" style={{ marginTop: "2.4rem" }} hover>
            Secondary
          </Button>
        </div>
        <div className="block">
          <Button color="danger" hover style={{ marginTop: "2.4rem" }}>
            Danger
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ButtonsPage;
