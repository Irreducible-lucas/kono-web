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
import { useMutation, useQueryClient } from "@tanstack/react-query";

function DeleteItemButton({
  itemId,
  handleSelectedItem,
  deleteItem,
  itemType,
  navigateTo,
  queryKey,
}: {
  itemId: any;
  handleSelectedItem: React.Dispatch<React.SetStateAction<any>>;
  deleteItem: any;
  itemType: string;
  navigateTo: string;
  queryKey: string;
}) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(() => deleteItem(itemId), {
    onSuccess: () => {
      handleSelectedItem(null);
      toast.success(`${itemType} deleted successfully!!!`);
      queryClient.invalidateQueries([queryKey]);
      navigate(navigateTo);
    },
    onError: () => {
      toast.error(`Error occurred while deleting ${itemType}`);
    },
  });

  const handleDelete = async () => {
    mutation.mutate();
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
