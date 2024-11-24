import { useDispatch } from "react-redux";
import { useAddBookMutation } from "../../../../services/bookApi";
import { setModal } from "../../../../features/modalSlice";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";

function BookModalForm() {
  const [addBook] = useAddBookMutation();
  const dispatch = useDispatch();
  const handleAddBook = async (event) => {
    event.preventDefault();
    const forma = new FormData(event.target);
    const data = Object.fromEntries(forma.entries());
    const added = new Date();
    const newUser = { ...data, added };

    await addBook(newUser).then(() => dispatch(setModal(false)));
  };
  return (
    <>
      <h1 className="text-center text-xl font-medium">Add book</h1>

      <form onSubmit={handleAddBook} className="w-full flex flex-col gap-3">
        <Input
          className
          label={"Title"}
          placeholder="enter title"
          type={"text"}
          inputStyle={""}
          name="title"
        />

        <Input
          className
          label={"Author"}
          placeholder="author"
          type={"text"}
          inputStyle={""}
          name="author"
        />
        <Input
          className
          label={"Year"}
          placeholder="released year"
          type={"text"}
          inputStyle={""}
          name="year"
        />
        <Input
          className
          label={"Price"}
          placeholder="price"
          type={"number"}
          inputStyle={""}
          name="price"
        />
        <Input
          className
          label={"Image"}
          placeholder="image in url"
          type={"text"}
          inputStyle={""}
          name="img"
        />
        <div className="w-full flex items-center gap-3 ">
          <Button
            type="button"
            handleClick={() => dispatch(setModal(false))}
            buttonStyles={"bg-red-500 text-white flex-1 text-base py-2 "}
          >
            Cancel
          </Button>
          <Button buttonStyles={"bg-blue-600 text-white flex-1 w-full py-2 "}>
            Add new book
          </Button>
        </div>
      </form>
    </>
  );
}

export default BookModalForm;
