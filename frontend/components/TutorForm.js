import styled from 'styled-components';
import Button from './styles/Button';
import Form from './styles/Form';

export default ({ form, loading, onSubmit, title, updateField }) => (
  <Form onSubmit={onSubmit}>
    <h2>{title}</h2>
    <fieldset disabled={loading} aria-busy={loading}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          value={form.name}
          onChange={updateField}
        />
      </label>
      <label htmlFor="description">
        Description
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          required
          value={form.description}
          onChange={updateField}
        />
      </label>
      <button type="submit">Submit</button>
    </fieldset>
  </Form>
);
