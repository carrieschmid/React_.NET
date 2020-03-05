import React, { useContext } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import TextInput from "../../app/common/form/TextInput";
import { Form, Button } from "semantic-ui-react";
import { IUserFormValues } from "../../app/models/user";
import { RootStoreContext } from "../../app/stores/rootStore";

const LoginForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { login } = rootStore.userStore;

  return (
    <FinalForm
      onSubmit={(values: IUserFormValues) => login(values)}
      render={({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field name="email" component={TextInput} placeholder="Email" />
          <Field
            name="password"
            component={TextInput}
            placeholder="Password"
            // type="password"
          />
          <Button positive content="Login" />
        </Form>
      )}
    />
  );
};

export default LoginForm;