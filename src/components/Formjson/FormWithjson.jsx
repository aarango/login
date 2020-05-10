import React from "react";
import Dynamic from "./FormDynamic/Dynamic";
import "bootstrap/dist/css/bootstrap.min.css";

import json from "./Datos.json";

const FormWithjson = () => {
  return (
    <Dynamic
      className="container mx-auto w-50"
      title={json.title}
      description={json.description}
      properties={json.properties}
      onSubmit_={(e) => alert(JSON.stringify(e))}
    />
  );
};
export default FormWithjson;
