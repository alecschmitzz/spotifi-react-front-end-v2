import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { playlistService } from "@/_services";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Playlist } from "@/data/playlists/schema";
import { Loader2Icon } from "lucide-react";
// import { RestaurantContext } from "@/context/RestaurantContext";

export default function AddEdit() {
  const { id } = useParams();
  const isAddMode = !id;
  const navigate = useNavigate();

  // const { selectedRestaurant } = useContext(RestaurantContext);

  // form validation rules
  const playlistValidationSchema = z.object({
    // id: z.string().min(1, { message: "Playlist ID is required" }),
    // owner_id: z.string().min(1, { message: "Owner ID is required" }),
    title: z.string().min(1, { message: "Playlist title is required" }),
    // address: z.string().min(1, { message: "Playlist address is required" }),
  });

  const form = useForm<z.infer<typeof playlistValidationSchema>>({
    resolver: zodResolver(playlistValidationSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(values: z.infer<typeof playlistValidationSchema>) {
    return isAddMode ? createPlaylist(values) : updatePlaylist(id, values);
  }

  function createPlaylist(data: z.infer<typeof playlistValidationSchema>) {
    return playlistService
      .create(data)
      .then(() => {
        // alertService.success("Playlist added", {
        //   keepAfterRouteChange: true,
        // });
        alert("Playlist added");
        navigate(".."); // Use navigate instead of history.push
      })
      .catch(() => alert("error"));
    // .catch(alertService.error);
  }

  function updatePlaylist(
    id: string,
    data: z.infer<typeof playlistValidationSchema>
  ) {
    return playlistService
      .update(id, data)
      .then(() => {
        // alertService.success("Playlist updated", {
        //   keepAfterRouteChange: true,
        // });
        alert("Playlist updated");
        navigate(".."); // Use navigate instead of history.push
      })
      .catch(() => alert("error"));
    // .catch(alertService.error);
  }

  useEffect(() => {
    if (!isAddMode) {
      // get playlist and set form fields
      playlistService
        .getById(id)
        .then((playlist) => {
          const fields: Array<keyof Playlist> = ["title"];
          fields.forEach((field) =>
            form.setValue(field as "title", playlist[field])
          );
        })
        .catch(() => alert("Could not get current playlist data"));
    }
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Revamp Your Tasty Offerings
            </h2>
            <p className="text-muted-foreground">
              Spice Up Your Playlist Today!
            </p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your playlist's title.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link to={".."} className="btn btn-link">
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Save
              {form.formState.isSubmitting && (
                <Loader2Icon size="18" className="animate-spin ms-2" />
              )}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
