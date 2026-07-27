1. Why class="users" and class="user"?

In HTML, you can name a class anything you want.

For example:

<div class="users">
    <div class="user">
    </div>
</div>

Here:

users = container that holds all users.
user = one user's card.

Think of it like this:

📦 users
   ├── 👤 user
   ├── 👤 user
   ├── 👤 user
   └── 👤 user

So users is plural because it contains many users, while user is singular because it represents one user.

2. But aren't classes only for Tailwind CSS?

Not necessarily.

Tailwind classes are things like:

flex
gap-5
bg-zinc-800
rounded-lg
text-white

These are predefined by Tailwind.

But these are your own custom class names:

users
user
nav
card
profile

Tailwind doesn't know what users or user mean. They're just names that the developer chooses.

Sometimes developers use them:

for better code readability,
to target elements with JavaScript,
or to add their own CSS later.
3. In app.js you said:
res.render("read", { users });

What does users mean here?

Suppose you fetch data from MongoDB:

let users = await userModel.find();

Now users contains an array:

[
  { name: "Kunal", email: "kunal@gmail.com" },
  { name: "Rahul", email: "rahul@gmail.com" }
]

Then you write:

res.render("read", { users });

This means:

"Render the read.ejs page and send the users data to it."

It's equivalent to:

res.render("read", {
    users: users
});

Inside read.ejs, you can use:

<%= users %>

or loop through them:

<% users.forEach(function(user) { %>
    <h1><%= user.name %></h1>
<% }) %>

Notice the difference:

users = the whole array (many users)
user = one object while looping
In short:
class="users" → just an HTML class name chosen by the developer.
class="user" → another HTML class name for a single user card.
users in res.render("read", { users }) → JavaScript variable containing user data from MongoDB.
user in a loop → one individual user object.

Even though they use the same words, they are completely different things. One is an HTML class name, and the other is a JavaScript variable.