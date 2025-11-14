// SEO-optimized blog posts data structure
export const blogPosts = [
  {
    id: 1,
    slug: 'javascript-modern-features-es6-beyond',
    title: 'JavaScript Modern Features: ES6 and Beyond',
    description: 'Explore the powerful modern features of JavaScript including arrow functions, destructuring, async/await, and more. Learn how ES6+ transforms JavaScript development.',
    author: 'Janabi Programmer',
    publishDate: '2024-11-14',
    lastModified: '2024-11-14',
    category: 'JavaScript',
    tags: ['JavaScript', 'ES6', 'Web Development', 'Programming'],
    readTime: '8 min read',
    image: '/images/javascript-features.jpg',
    imageAlt: 'JavaScript ES6 modern features code example',
    content: `
      <article>
        <p>JavaScript has evolved significantly since the introduction of ES6 (ECMAScript 2015). Let's explore the most impactful features that have transformed modern web development.</p>

        <h2>Arrow Functions</h2>
        <p>Arrow functions provide a more concise syntax for writing functions and lexically bind the 'this' value.</p>
        <pre><code>// Traditional function
const add = function(a, b) {
  return a + b;
};

// Arrow function
const add = (a, b) => a + b;</code></pre>

        <h2>Destructuring</h2>
        <p>Destructuring makes it easy to extract values from arrays and objects into distinct variables.</p>
        <pre><code>const person = { name: 'Janabi', role: 'Programmer' };
const { name, role } = person;

const numbers = [1, 2, 3];
const [first, second] = numbers;</code></pre>

        <h2>Async/Await</h2>
        <p>Async/await makes asynchronous code look and behave more like synchronous code, improving readability.</p>
        <pre><code>async function fetchData() {
  try {
    const response = await fetch('api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}</code></pre>

        <h2>Template Literals</h2>
        <p>Template literals allow embedded expressions and multi-line strings.</p>
        <pre><code>const name = 'Janabi';
const greeting = \`Hello, \${name}!
Welcome to modern JavaScript.\`;</code></pre>

        <h2>Conclusion</h2>
        <p>These modern JavaScript features have revolutionized how we write code, making it more readable, maintainable, and powerful. Understanding and utilizing these features is essential for any modern web developer.</p>
      </article>
    `,
    keywords: ['JavaScript ES6', 'modern JavaScript', 'arrow functions', 'destructuring', 'async await', 'JavaScript features']
  },
  {
    id: 2,
    slug: 'python-best-practices-clean-code',
    title: 'Python Best Practices: Writing Clean and Pythonic Code',
    description: 'Master Python best practices and conventions. Learn how to write clean, maintainable, and Pythonic code following PEP 8 guidelines and industry standards.',
    author: 'Janabi Programmer',
    publishDate: '2024-11-10',
    lastModified: '2024-11-10',
    category: 'Python',
    tags: ['Python', 'Best Practices', 'Clean Code', 'PEP 8'],
    readTime: '10 min read',
    image: '/images/python-best-practices.jpg',
    imageAlt: 'Python clean code best practices illustration',
    content: `
      <article>
        <p>Writing Pythonic code is about more than just making your code work—it's about writing code that is readable, maintainable, and follows the conventions of the Python community.</p>

        <h2>Follow PEP 8 Guidelines</h2>
        <p>PEP 8 is the style guide for Python code. Following it ensures consistency across projects.</p>
        <pre><code># Good - following PEP 8
def calculate_total_price(items, tax_rate):
    subtotal = sum(item.price for item in items)
    return subtotal * (1 + tax_rate)

# Bad - not following conventions
def calculateTotalPrice(Items,taxRate):
    SubTotal=sum(item.price for item in Items)
    return SubTotal*(1+taxRate)</code></pre>

        <h2>Use List Comprehensions</h2>
        <p>List comprehensions provide a concise way to create lists and are more Pythonic than traditional loops.</p>
        <pre><code># Pythonic way
squares = [x**2 for x in range(10) if x % 2 == 0]

# Less Pythonic
squares = []
for x in range(10):
    if x % 2 == 0:
        squares.append(x**2)</code></pre>

        <h2>Use Context Managers</h2>
        <p>Always use context managers (with statements) for resource management.</p>
        <pre><code># Good - using context manager
with open('file.txt', 'r') as file:
    content = file.read()
    # File is automatically closed

# Bad - manual resource management
file = open('file.txt', 'r')
content = file.read()
file.close()  # Easy to forget!</code></pre>

        <h2>Embrace Duck Typing</h2>
        <p>Python uses duck typing—if it walks like a duck and quacks like a duck, it's a duck.</p>
        <pre><code>def process_items(items):
    # Works with any iterable
    for item in items:
        print(item)

# Works with list, tuple, set, generator, etc.</code></pre>

        <h2>Use Descriptive Names</h2>
        <p>Variable and function names should be descriptive and follow conventions.</p>
        <pre><code># Good
user_authentication_token = generate_token(user)
is_valid = validate_email(email_address)

# Bad
uat = gen_tok(u)
v = val(e)</code></pre>

        <h2>Conclusion</h2>
        <p>Writing clean, Pythonic code makes your projects more maintainable and easier to collaborate on. These practices are essential for professional Python development.</p>
      </article>
    `,
    keywords: ['Python best practices', 'Pythonic code', 'PEP 8', 'clean code Python', 'Python conventions', 'Python programming']
  },
  {
    id: 3,
    slug: 'typescript-advanced-types-generics',
    title: 'TypeScript Advanced Types and Generics: A Complete Guide',
    description: 'Deep dive into TypeScript advanced type system including generics, conditional types, mapped types, and utility types. Enhance your TypeScript skills.',
    author: 'Janabi Programmer',
    publishDate: '2024-11-05',
    lastModified: '2024-11-05',
    category: 'TypeScript',
    tags: ['TypeScript', 'Generics', 'Advanced Types', 'Type System'],
    readTime: '12 min read',
    image: '/images/typescript-advanced.jpg',
    imageAlt: 'TypeScript advanced types and generics code example',
    content: `
      <article>
        <p>TypeScript's type system is one of its most powerful features. Let's explore advanced types and generics that will take your TypeScript skills to the next level.</p>

        <h2>Understanding Generics</h2>
        <p>Generics allow you to create reusable components that work with multiple types while maintaining type safety.</p>
        <pre><code>// Generic function
function identity&lt;T&gt;(arg: T): T {
  return arg;
}

// Usage
const num = identity&lt;number&gt;(42);
const str = identity&lt;string&gt;("Hello");

// Generic interface
interface Box&lt;T&gt; {
  value: T;
}

const numberBox: Box&lt;number&gt; = { value: 123 };
const stringBox: Box&lt;string&gt; = { value: "TypeScript" };</code></pre>

        <h2>Conditional Types</h2>
        <p>Conditional types allow you to create types based on conditions.</p>
        <pre><code>type IsString&lt;T&gt; = T extends string ? true : false;

type A = IsString&lt;string&gt;;  // true
type B = IsString&lt;number&gt;;  // false

// Practical example
type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;

type C = NonNullable&lt;string | null&gt;;  // string</code></pre>

        <h2>Mapped Types</h2>
        <p>Mapped types allow you to transform properties of existing types.</p>
        <pre><code>type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};

type Optional&lt;T&gt; = {
  [P in keyof T]?: T[P];
};

interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly&lt;User&gt;;
type PartialUser = Optional&lt;User&gt;;</code></pre>

        <h2>Utility Types</h2>
        <p>TypeScript provides built-in utility types for common type transformations.</p>
        <pre><code>// Partial - makes all properties optional
type PartialUser = Partial&lt;User&gt;;

// Required - makes all properties required
type RequiredUser = Required&lt;PartialUser&gt;;

// Pick - selects specific properties
type UserPreview = Pick&lt;User, 'id' | 'name'&gt;;

// Omit - excludes specific properties
type UserWithoutId = Omit&lt;User, 'id'&gt;;

// Record - creates object type with specific keys and values
type Roles = Record&lt;string, string[]&gt;;</code></pre>

        <h2>Generic Constraints</h2>
        <p>Constraints allow you to restrict the types that can be used with generics.</p>
        <pre><code>interface HasLength {
  length: number;
}

function logLength&lt;T extends HasLength&gt;(arg: T): void {
  console.log(arg.length);
}

logLength("Hello");     // OK
logLength([1, 2, 3]);   // OK
logLength(123);         // Error: number doesn't have length</code></pre>

        <h2>Conclusion</h2>
        <p>Mastering advanced TypeScript types and generics enables you to write more robust, reusable, and type-safe code. These features are essential for building scalable TypeScript applications.</p>
      </article>
    `,
    keywords: ['TypeScript generics', 'TypeScript advanced types', 'conditional types', 'mapped types', 'utility types', 'TypeScript programming']
  },
  {
    id: 4,
    slug: 'rust-ownership-memory-safety',
    title: 'Rust Ownership System: Understanding Memory Safety Without Garbage Collection',
    description: 'Learn how Rust achieves memory safety through its unique ownership system. Understand borrowing, lifetimes, and why Rust is revolutionizing systems programming.',
    author: 'Janabi Programmer',
    publishDate: '2024-11-01',
    lastModified: '2024-11-01',
    category: 'Rust',
    tags: ['Rust', 'Memory Safety', 'Ownership', 'Systems Programming'],
    readTime: '15 min read',
    image: '/images/rust-ownership.jpg',
    imageAlt: 'Rust programming language ownership and memory safety',
    content: `
      <article>
        <p>Rust's ownership system is its most distinctive feature, enabling memory safety without garbage collection. Let's understand how this revolutionary approach works.</p>

        <h2>The Three Rules of Ownership</h2>
        <p>Rust's ownership system is based on three fundamental rules:</p>
        <ol>
          <li>Each value in Rust has a variable that's called its owner</li>
          <li>There can only be one owner at a time</li>
          <li>When the owner goes out of scope, the value is dropped</li>
        </ol>
        <pre><code>fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 is moved to s2

    // println!("{}", s1);  // Error! s1 no longer valid
    println!("{}", s2);     // OK
}</code></pre>

        <h2>Borrowing and References</h2>
        <p>Borrowing allows you to reference a value without taking ownership.</p>
        <pre><code>fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);  // Borrow s1

    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}  // s goes out of scope, but doesn't own the data</code></pre>

        <h2>Mutable References</h2>
        <p>You can have mutable references, but with restrictions to prevent data races.</p>
        <pre><code>fn main() {
    let mut s = String::from("hello");

    change(&mut s);

    println!("{}", s);  // "hello, world"
}

fn change(s: &mut String) {
    s.push_str(", world");
}

// Rule: Only ONE mutable reference at a time
let mut s = String::from("hello");
let r1 = &mut s;
// let r2 = &mut s;  // Error! Can't have two mutable references</code></pre>

        <h2>Lifetimes</h2>
        <p>Lifetimes ensure that references are valid for as long as they're used.</p>
        <pre><code>// Explicit lifetime annotation
fn longest&lt;'a&gt;(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let string1 = String::from("long string");
    let string2 = String::from("xyz");

    let result = longest(string1.as_str(), string2.as_str());
    println!("The longest string is {}", result);
}</code></pre>

        <h2>Why This Matters</h2>
        <p>Rust's ownership system prevents common bugs at compile time:</p>
        <ul>
          <li>No null pointer dereferences</li>
          <li>No use-after-free errors</li>
          <li>No data races in concurrent code</li>
          <li>No memory leaks (in safe code)</li>
        </ul>

        <h2>The Copy Trait</h2>
        <p>Simple types implement the Copy trait and are copied instead of moved.</p>
        <pre><code>fn main() {
    let x = 5;
    let y = x;  // x is copied, not moved

    println!("x = {}, y = {}", x, y);  // Both valid!
}

// Types that implement Copy: integers, booleans, floats, char, tuples of Copy types</code></pre>

        <h2>Conclusion</h2>
        <p>Rust's ownership system may seem complex at first, but it provides unparalleled memory safety guarantees at compile time. This is why Rust is becoming the language of choice for systems programming, replacing C and C++ in critical applications.</p>
      </article>
    `,
    keywords: ['Rust programming', 'Rust ownership', 'memory safety', 'borrowing Rust', 'lifetimes Rust', 'systems programming']
  }
];

// Helper functions for SEO
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

export const getAllCategories = () => {
  return [...new Set(blogPosts.map(post => post.category))];
};

export const getAllTags = () => {
  return [...new Set(blogPosts.flatMap(post => post.tags))];
};
