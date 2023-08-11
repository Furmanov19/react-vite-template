import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import SimpleForm from "@/components/index-page/simple-form";
import { sayHello, sayHelloWithPayload } from "@/store/hello-world.slice";
import { RootState } from "@/store";
import DefaultLayout from "@/layouts/default";

function IndexPage() {
  const text = useSelector((state: RootState) => state.helloWorldReducer.text);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sayHello());
    setTimeout(() => {
      dispatch(sayHelloWithPayload("Hello from payload"));
    }, 5000);
  }, []);

  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>I'm index page</h1>
      <p>Text with payload will appear in 5 seconds</p>
      <p>{text}</p>
      <br />
      <SimpleForm />
    </DefaultLayout>
  );
}

export default IndexPage;
