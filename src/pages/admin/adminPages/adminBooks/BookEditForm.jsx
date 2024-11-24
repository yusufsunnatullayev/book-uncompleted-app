import React from "react";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";
import {
  useBookDetailQuery,
  useUpdateBookMutation,
} from "../../../../services/bookApi";
import { setModal } from "../../../../features/modalSlice";
import { useDispatch } from "react-redux";

const BookEditForm = ({ id }) => {
  const { data: currentBook, isSuccess, isLoading } = useBookDetailQuery(id);
  const [updateBook] = useUpdateBookMutation();
  const dispatch = useDispatch();

  const handleEditBook = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const edittedBook = Object.fromEntries(form.entries());
    console.log(edittedBook);
    await updateBook({ id, ...edittedBook }).then(() =>
      dispatch(setModal(false))
    );
  };

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {isSuccess && (
        <>
          <h1 className="text-center text-xl font-medium">Edit Book</h1>

          <form
            onSubmit={handleEditBook}
            className="w-full flex flex-col gap-3"
          >
            <Input
              className="input-class"
              label={"Title"}
              placeholder="Enter title"
              type={"text"}
              inputStyle={""}
              name="title"
              defaultValue={currentBook?.title} // Bind the current book's data
            />

            <Input
              className="input-class"
              label={"Author"}
              placeholder="Enter author"
              type={"text"}
              inputStyle={""}
              name="author"
              defaultValue={currentBook?.author} // Bind the current book's data
            />

            <Input
              className="input-class"
              label={"Year"}
              placeholder="Released year"
              type={"text"}
              inputStyle={""}
              name="year"
              defaultValue={currentBook?.year} // Bind the current book's data
            />

            <Input
              className="input-class"
              label={"Price"}
              placeholder="Price"
              type={"number"}
              inputStyle={""}
              name="price"
              defaultValue={currentBook?.price} // Bind the current book's data
            />

            <Input
              className="input-class"
              label={"Image"}
              placeholder="Image URL"
              type={"text"}
              inputStyle={""}
              name="img"
              defaultValue={currentBook?.img} // Bind the current book's data
            />

            <div className="w-full flex items-center gap-3">
              <Button
                type="button"
                handleClick={() => dispatch(setModal(false))}
                buttonStyles={"bg-red-500 text-white flex-1 text-base py-2"}
              >
                Cancel
              </Button>
              <Button
                buttonStyles={"bg-blue-600 text-white flex-1 w-full py-2"}
              >
                Save
              </Button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default BookEditForm;
