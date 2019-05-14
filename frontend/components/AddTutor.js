import React, { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Button from './styles/Button';
import Form from './styles/Form';
import fetch from '../lib/api';

export default props => {
  const [loading, setLoading] = useState(false);
  const [form, setValues] = useState({
    name: '',
    description: '',
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form
      onSubmit={async e => {
        e.preventDefault();
        setLoading(true);

        await fetch({
          url: '/add',
          method: 'post',
          payload: form,
        });

        setLoading(false);
        Router.push({ pathname: '/' });
      }}
    >
      <h2>Add new Tutor</h2>
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
};
