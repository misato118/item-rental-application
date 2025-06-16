import { ChangeRenterAppStatusDocument, GetRenterInfoQuery, RenterApplicationStatusType } from "@/features/utils/graphql/typeDefs/graphql";
import { useMutation } from "@apollo/client";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type RenterApplicationData = NonNullable<
    GetRenterInfoQuery["renterInfo"]
>["renterApplications"][number];

export type Schema = {
    id: number;
    status: RenterApplicationStatusType;
};

const useActionReturn = (onClose: () => void, setSelectedApplication: Dispatch<SetStateAction<RenterApplicationData | null>>) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const { handleSubmit, setValue } = useForm<Schema>();
    const [createActionReturnMutation] = useMutation(ChangeRenterAppStatusDocument);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    const onSubmit: SubmitHandler<Schema> = async (data: Schema) => {
        try {
            const response = await createActionReturnMutation({
                variables: {
                    changeRenterAppStatusInput: data
                }
            });

            if (response) {
                setSelectedApplication(null);
                onClose();
                window.location.reload();
            }
        } catch (error) {
            console.log("Mutation Error: " + error);
        }
    };


    return {
        modalRef,
        handleSubmit,
        onSubmit,
        setValue
    }
}

export default useActionReturn;