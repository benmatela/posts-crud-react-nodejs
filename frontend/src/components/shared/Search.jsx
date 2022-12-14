import React from "react";
import { useForm } from "react-hook-form";
import Input from "@material-ui/core/Input";

export const Search = (props) => {
  const { register, handleSubmit } = useForm();

  const handleSearchKeyUp = (event) => {
    props.handleSearchKeyUp(event.target.value);
  };

  return (
    <div className="w-full mx-auto text-center">
        <Input
          id={"searchBar"}
          data-testid={"searchBar"}
          className={"form-input w-[100%] md:w-[50%]"}
          placeholder={props.searchPlaceholder}
          onKeyUp={event => handleSubmit(handleSearchKeyUp(event))}
          {...register("searchItem", { required: false })}
        />
    </div>
  );
};
