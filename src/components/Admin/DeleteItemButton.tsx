import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import React from "react";

function DeleteItemButton({
  itemId,
  handleSelectedItem,
  deleteItem,
  itemType,
  navigateTo,
}: {
  itemId: any;
  handleSelectedItem: React.Dispatch<React.SetStateAction<any>>;
  deleteItem: any;
  itemType: string;
  navigateTo: string;
}) {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await deleteItem(itemId);
      handleSelectedItem(null);
      toast.success(`${itemType} deleted successfully!!!`);
      navigate(navigateTo);
    } catch (error) {
      toast.error(`Error occurred while deleting ${itemType}`);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="px-4 py-2 text-sm border border-blue-700 rounded-lg text-blue-700">
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your{" "}
            {itemType} from the database permanently.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className="bg-secondary">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteItemButton;
