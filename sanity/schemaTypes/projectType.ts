import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "description",
      title: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "url",
      title: "url",
      type: "url",
    }),
  ],
});
