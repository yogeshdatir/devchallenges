import React from "react";
import Input from "../inputs/Input";
import PhoneIcon from "@material-ui/icons/Phone";
import LockIcon from "@material-ui/icons/Lock";
import "./ButtonsPage.css";
import "./InputsPage.css";
import Footer from "../Footer";

interface Props {}

const InputsPage = (props: Props) => {
  return (
    <div className="container">
      <p className="header">Inputs</p>

      <div className="row">
        <div className="block">
          <p className="tags">{`<Input />`}</p>
          <Input />
        </div>
        <div className="block">
          <p className="tags">{`&:hover`}</p>
          <Input hover />
        </div>
        <div className="block">
          <p className="tags">{`&:focus`}</p>
          <Input focus />
        </div>
      </div>
      <div className="row">
        <div className="block">
          <p className="tags">{`<Input error />`}</p>
          <Input error />
        </div>
        <div className="block">
          <p className="tags">{`&:hover`}</p>
          <Input error hover />
        </div>
        <div className="block">
          <p className="tags">{`&:focus`}</p>
          <Input type="" error focus />
        </div>
      </div>
      <div className="row">
        <div className="block">
          <p className="tags">{`<Input disabled />`}</p>
          <Input disabled />
        </div>
      </div>
      <div className="row">
        <div className="block">
          <p className="tags">{`<Input helperText=”Some interesting text” />`}</p>
          <Input helperText="Some interesting text" />
        </div>
        <div className="block">
          <p className="tags">{`<Input helperText=”Some interesting text” error />`}</p>
          <Input helperText="Some interesting text" error />
        </div>
      </div>
      <div className="row">
        <div className="block">
          <p className="tags">{`<Input startIcon />`}</p>
          <Input startIcon={<PhoneIcon />} />
        </div>
        <div className="block">
          <p className="tags">{`<Input endIcon />`}</p>
          <Input endIcon={<LockIcon />} />
        </div>
      </div>
      <div className="row">
        <div className="block">
          <p className="tags">{`<Input value=”text” />`}</p>
          <Input value="text" />
        </div>
      </div>
      <div className="row">
        <div className="block">
          <p className="tags">{`<Input size=”sm” />`}</p>
          <Input size="sm" />
        </div>
        <div className="block">
          <p className="tags">{`<Input size=”md” />`}</p>
          <Input size="md" />
        </div>
      </div>
      <div className="row">
        <div className="full-width-block">
          <p className="tags">{`<Input fullWidth />`}</p>
          <Input fullWidth />
        </div>
      </div>
      <div className="row">
        <div className="block">
          <p className="tags">{`<Input multiline row=”4” />`}</p>
          <Input multiline row={4} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InputsPage;
