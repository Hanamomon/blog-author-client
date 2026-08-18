import { Form } from 'react-router';
import { Editor } from '@tinymce/tinymce-react';

function NewPost() {
  return (
    <main>
      <Form action="/posts/new" method="POST">
        <div>
          <label htmlFor="title">Title:</label>
          <input name="title" id="title" type="text" />
        </div>
        <Editor
          apiKey={import.meta.env.VITE_TINY_API}
          initialValue="<p>This is the initial content of the editor.</p>"
          textareaName="content"
          init={{
            plugins: [
              'anchor',
              'autolink',
              'autoresize',
              'charmap',
              'codesample',
              'emoticons',
              'link',
              'lists',
              'media',
              'searchreplace',
              'table',
              'visualblocks',
              'wordcount',
            ],
            toolbar:
              'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table | align lineheight | checklist numlist bullist indent outdent | removeformat',
            content_style:
              'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            content_css: 'writer',
            statusbar: false,
          }}
        />
        <button type="submit">Post</button>
      </Form>
    </main>
  );
}

export default NewPost;
