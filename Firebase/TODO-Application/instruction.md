PROJECT:
Design a complete responsive web application UI/UX for a modern Todo and Community Task Management platform powered by Firebase backend services.

The application is NOT just a basic todo list.

It combines:
1. Personal task management
2. Public community posts/tasks
3. User reactions
4. User authentication
5. User profiles
6. Role-based User and Admin dashboards
7. Firebase-backed application states

Create a complete developer-ready UI system and all required screens for both desktop and small mobile screens.

==================================================
1. PRODUCT GOAL
==================================================

Create a clean, professional, modern productivity application where authenticated users can:

- Create todo tasks
- Edit their own tasks
- Delete their own tasks
- Mark tasks complete/incomplete
- Set priority
- Set due dates
- Organize tasks
- Create public posts/tasks
- View all public posts
- Like posts
- Dislike posts
- Manage their own profile

Normal users MUST NOT be able to filter the public feed by individual users.

Administrators have a separate dashboard and can:

- View all users
- View all posts/tasks
- Filter posts by user
- Search users
- Inspect user activity
- Moderate posts
- Delete inappropriate posts
- View platform statistics

Keep USER and ADMIN experiences visually related through the same design system, but clearly separate their navigation and functionality.

==================================================
2. TECHNOLOGY CONTEXT
==================================================

The application will be developed using Firebase backend services.

Design UI states that make sense for:

Firebase Authentication
- Email/password signup
- Email/password signin
- Forgot password
- Password reset
- Sign out
- Authentication errors

Firestore
- Todo/task storage
- Public posts
- User profiles
- Likes/dislikes
- Role information

Firebase Storage if required
- User profile/avatar images
- Optional post attachments

Do not design backend architecture or code.

Design the frontend UX so developers can clearly map UI states to Firebase operations.

==================================================
3. TARGET DEVICES
==================================================

Create responsive designs for:

DESKTOP
- Primary design width: 1440px
- Content max-width: approximately 1200–1280px
- Desktop sidebar where appropriate

TABLET
- 768px–1024px
- Collapsible navigation

MOBILE / SMALL SCREEN
- Primary mobile width: 390px
- Must also remain usable at 360px width
- Single-column layouts
- Touch-friendly controls
- No horizontal scrolling

Use an 8px spacing system.

Common spacing:
4px
8px
12px
16px
24px
32px
48px
64px

Minimum mobile touch target:
44x44px

==================================================
4. VISUAL DIRECTION
==================================================

STYLE:
Modern SaaS productivity dashboard.

The interface should feel:
- Clean
- Calm
- Productive
- Friendly
- Trustworthy
- Professional
- Lightweight
- Developer-friendly

Avoid:
- Excessive gradients
- Glassmorphism everywhere
- Neon colors
- Heavy shadows
- Oversized cards
- Excessive rounded corners
- Cartoonish dashboard UI
- Too many decorative illustrations

Use illustrations selectively on:
- Sign up
- Sign in
- Forgot password
- Reset/update password
- Empty states
- Success states
- Optional onboarding

==================================================
5. ILLUSTRATION STYLE
==================================================

Use the uploaded reference images only as STYLE INSPIRATION.

The illustration style is:

"Flat vector SaaS onboarding illustration"
"Flat character UI illustration"
"Modern productivity vector illustration"

Visual characteristics:
- Friendly human characters
- Simplified geometric forms
- Abstract background blobs
- Plants/leaves
- Floating interface cards
- Checkmarks
- User/profile symbols
- Task/checklist symbols
- Soft geometric decoration
- Minimal detail
- Clean vector appearance

DO NOT copy the reference artwork exactly.

Create original illustrations with a similar visual language.

Use illustrations primarily on authentication pages and empty states.

The dashboard itself should prioritize actual product information over illustration.

==================================================
6. COLOR SYSTEM
==================================================

Use an accessible light-theme palette.

Primary:
#4F46E5

Primary Hover:
#4338CA

Primary Light:
#EEF2FF

Secondary / Accent:
#14B8A6

Page Background:
#F8FAFC

Surface:
#FFFFFF

Main Text:
#0F172A

Secondary Text:
#475569

Muted Text:
#64748B

Border:
#E2E8F0

Success:
#16A34A

Warning:
#F59E0B

Error / Destructive:
#DC2626

Like:
#4F46E5

Dislike:
#64748B

Completed Task:
#16A34A

High Priority:
#DC2626

Medium Priority:
#F59E0B

Low Priority:
#16A34A

Meet WCAG AA contrast requirements.

Do not communicate important status using color alone.
Combine color with labels/icons.

==================================================
7. TYPOGRAPHY
==================================================

Use:
Inter

Fallback:
system-ui, sans-serif

Desktop page title:
32px / 40px / 700

Section heading:
24px / 32px / 700

Card heading:
18px / 28px / 600

Body:
16px / 24px / 400

Small:
14px / 20px / 400 or 500

Caption:
12px / 16px / 500

Buttons:
14–16px / 600

Maintain strong hierarchy and excellent readability.

==================================================
8. COMPONENT DESIGN SYSTEM
==================================================

Create reusable components for:

BUTTONS
- Primary
- Secondary
- Outline
- Ghost
- Destructive
- Icon button
- Loading button
- Disabled state

Button heights:
- Small: 36px
- Default: 44px
- Large: 48px

INPUTS
- Text input
- Email
- Password
- Textarea
- Search
- Date picker
- Select
- Checkbox
- Radio
- Toggle
- File upload
- Tag input

Input default height:
44–48px

Include:
- Label
- Placeholder
- Helper text
- Focus state
- Error state
- Disabled state
- Success state where useful

CARDS
- Todo card
- Public post card
- Statistics card
- User card
- Admin table/card
- Empty-state card

Card radius:
12px

Input/button radius:
8px

Border:
1px solid #E2E8F0

Use subtle shadows only when necessary.

==================================================
9. GLOBAL APPLICATION NAVIGATION
==================================================

DESKTOP USER APP:

Left sidebar approximately 240–260px.

Navigation:
- Logo / Product Name
- Dashboard
- My Tasks
- Community
- Create Post
- Profile
- Settings

Bottom sidebar:
- User avatar
- User name
- User email
- Sign Out

Main content area:
- Top header
- Page title
- Search where relevant
- Notification/action area if needed
- User menu

MOBILE USER APP:

Use:
- Compact top app bar
- Bottom navigation for highest-frequency destinations

Recommended bottom navigation:
- Home
- Tasks
- Add
- Community
- Profile

Use a prominent central Add action if appropriate.

==================================================
10. AUTHENTICATION — SIGN UP
==================================================

Create desktop and mobile signup screens.

DESKTOP:
Use a split-screen composition.

Left side approximately 45%:
- Original flat vector productivity illustration
- Short headline
- Short supporting text

Right side approximately 55%:
Centered signup card/form.

Content:
- Logo
- "Create your account"
- Supporting description
- Full Name
- Email Address
- Password
- Confirm Password
- Password visibility toggle
- Password requirements
- Terms/privacy checkbox
- Primary "Create Account" button
- Link: "Already have an account? Sign in"

Optional:
Google sign-up button ONLY if social authentication is intended.

Show states:
- Default
- Focus
- Invalid email
- Weak password
- Password mismatch
- Email already registered
- Loading
- Account creation success

MOBILE:
- Remove large side illustration
- Use small illustration or logo at top
- Full-width form
- 16–20px horizontal padding
- Keep primary CTA visible and prominent

==================================================
11. SIGN IN SCREEN
==================================================

Desktop:
Use same authentication visual system.

Include:
- Logo
- Welcome back heading
- Email
- Password
- Show/hide password
- Remember me if supported
- Forgot Password link
- Sign In button
- Create Account link

States:
- Invalid credentials
- User not found
- Wrong password
- Too many attempts
- Network error
- Loading

Mobile:
Single column.
Prioritize form over illustration.

==================================================
12. FORGOT PASSWORD
==================================================

Screen content:
- Back to Sign In
- Lock/email illustration
- "Forgot your password?"
- Explanation
- Email field
- "Send Reset Link" CTA

SUCCESS STATE:
Show a separate confirmation state:

"Check your email"

Include:
- Email icon/illustration
- Explanation
- Resend link/button
- Return to Sign In

Also design:
- Invalid email state
- User-not-found-safe messaging
- Loading state
- Network error

==================================================
13. UPDATE / RESET PASSWORD
==================================================

Create password update screen.

Include:
- Security illustration
- "Create a new password"
- New Password
- Confirm New Password
- Password visibility toggles
- Password strength/requirements
- Update Password button

Requirements visually communicate:
- Minimum length
- Upper/lowercase if required
- Number if required
- Special character if required

SUCCESS:
- Success check icon
- "Password updated"
- Button: "Continue to Sign In"

ERROR:
- Expired reset link
- Invalid reset link
- Password mismatch
- Weak password

==================================================
14. USER DASHBOARD
==================================================

The dashboard should immediately answer:

"What do I need to do?"
"What is due soon?"
"What have I completed?"

Desktop structure:

Header:
"Good morning, [First Name]"
Short productivity summary
Primary CTA: "+ Add Task"

Statistics row:
- Total Tasks
- Tasks Today
- Completed
- Overdue

Use compact cards rather than oversized analytics cards.

Main layout:
Approximately 65/35 or 70/30.

LEFT:
My Tasks / Today's Tasks

RIGHT:
Upcoming deadlines
Recent activity or task summary

Include:
- Quick Add Task
- Task list
- Due date
- Priority
- Completion checkbox
- Edit
- Delete
- More menu

Useful task sections:
- Today
- Upcoming
- Completed

Do not overload the dashboard with unnecessary charts.

==================================================
15. ADD TODO TASK
==================================================

Create a dedicated task form or responsive drawer/modal.

Fields:
- Task Title (required)
- Description
- Due Date
- Due Time
- Priority: Low / Medium / High
- Category
- Tags
- Optional attachment
- Public/Private visibility if tasks can become community posts

Actions:
- Cancel
- Save Task

Desktop:
Use modal, side drawer, or dedicated form based on complexity.

Mobile:
Use full-screen form rather than a narrow modal.

Show:
- Validation
- Saving
- Save success
- Error

==================================================
16. MY TASKS SCREEN
==================================================

Create a task management page.

Header:
- "My Tasks"
- Search
- Add Task button

User may filter THEIR OWN TASKS by:
- All
- Today
- Upcoming
- Completed
- Overdue
- Priority
- Category

Important:
This personal task filtering is different from filtering PUBLIC POSTS BY USER.

Normal users can organize/filter their own tasks.

Normal users MUST NOT receive a public-feed "filter by user" feature.

Views:
- Clean list view as default
- Optional compact card view

Each task item:
- Checkbox
- Title
- Short description
- Category/tag
- Priority
- Due date/time
- Status
- Edit
- Delete
- More menu

Completed tasks:
Use subdued appearance and strikethrough title where appropriate.

==================================================
17. COMMUNITY / ALL POSTS
==================================================

Create a public community feed.

USER PERMISSIONS:
- View all public posts
- Add public post
- Like post
- Dislike post
- View post details

DO NOT provide normal users with:
- Filter by user
- User-specific feed filtering
- Admin moderation controls

Header:
"Community"

Actions:
- Search posts
- Sort: Latest / Popular
- Create Post

Optional category/tag filtering is allowed.

DO NOT include "Filter by User" for normal users.

POST CARD:

Header:
- Avatar
- Author display name
- Timestamp
- Optional category

Body:
- Post/task title
- Description
- Optional image/attachment
- Tags

Footer:
- Like icon + count
- Dislike icon + count
- Optional comment count only if comments are implemented
- Share/copy link only if implemented

Clearly show:
- User has liked
- User has disliked
- Neutral state

Keep reaction controls accessible and touch-friendly.

==================================================
18. CREATE POST SCREEN
==================================================

Create public post form.

Fields:
- Post Title
- Description
- Category
- Tags
- Optional image attachment
- Optional related task
- Visibility confirmation

Actions:
- Cancel
- Publish Post

Include a clear message:
"This post will be visible to the community."

Image uploader:
- Drag/drop desktop
- Browse button
- Thumbnail preview
- Remove image
- Upload progress
- Upload error

Mobile:
Use full-screen form.

==================================================
19. POST DETAILS
==================================================

Create a detailed post screen.

Include:
- Author information
- Timestamp
- Title
- Full content
- Attachment/image
- Tags/category
- Like
- Dislike

If comments are NOT part of the backend scope, do not invent a full comment system.

Provide clear Back navigation.

==================================================
20. USER PROFILE
==================================================

Profile screen:

Header:
- Avatar
- Full name
- Email
- Join date if available

Sections:
- Profile Information
- My public posts
- Task statistics

Actions:
- Edit Profile
- Change Password
- Sign Out

Edit Profile:
- Avatar upload
- Full Name
- Optional bio
- Save Changes

Do not expose sensitive account information.

==================================================
21. SETTINGS
==================================================

Create a simple settings screen.

Sections:
ACCOUNT
- Profile
- Change Password

PREFERENCES
- Notification preferences if implemented
- Theme placeholder only if dark mode will actually be developed

SECURITY
- Sign out
- Optional account deletion

Do not add settings that cannot realistically be implemented.

==================================================
22. ADMIN DASHBOARD
==================================================

Admin dashboard MUST be visually and functionally separate from normal user dashboard.

Use same design language but make admin context obvious.

Admin sidebar:

- Admin Overview
- Users
- Posts
- Task/Post Management
- Reports / Moderation if implemented
- Admin Profile
- Sign Out

Add a small "ADMIN" badge near profile or navigation identity.

ADMIN OVERVIEW:

Statistics:
- Total Users
- Total Posts
- Total Tasks
- Active Users
- Engagement / Reactions

Use useful statistics rather than decorative analytics.

Include:
- Recent users
- Recent posts
- Moderation activity
- Recent platform activity

Charts should only be used where they communicate useful trends.

==================================================
23. ADMIN USERS MANAGEMENT
==================================================

Desktop:
Use data table.

Columns:
- User
- Email
- Role
- Joined Date
- Posts
- Tasks
- Status
- Actions

Controls:
- Search
- Status filter
- Role filter if roles can change
- Sort
- Pagination

Actions menu:
- View user
- View user's posts
- Disable/suspend only if supported
- Delete only if supported

Use confirmation dialogs for destructive actions.

Mobile:
Convert dense table into responsive user cards.

==================================================
24. ADMIN POST MANAGEMENT
==================================================

THIS IS AN IMPORTANT ROLE DIFFERENCE.

Admins CAN filter posts by user.

Header:
"Post Management"

Controls:
- Search
- Filter by User
- Category
- Date
- Status if applicable
- Sort
- Clear Filters

"Filter by User" should support:
- Search user name
- Search email if appropriate
- Select user
- Clear selected user

Desktop:
Use table or compact management list.

Columns:
- Author
- Post
- Category
- Created
- Likes
- Dislikes
- Status
- Actions

Actions:
- View
- View author
- Remove/delete
- Moderate if moderation is supported

Mobile:
Use cards with filter bottom sheet.

==================================================
25. EMPTY STATES
==================================================

Create original flat vector illustrations in the same general visual family as the supplied references.

Required empty states:

NO TASKS:
Illustration of person with checklist.
Text:
"No tasks yet"
CTA:
"Create your first task"

NO COMPLETED TASKS:
Simple checklist illustration.

NO POSTS:
Community/message illustration.
CTA:
"Create a post"

NO SEARCH RESULTS:
Search illustration.
Text:
"No results found"

ADMIN FILTER EMPTY:
"No posts found for this user/filter combination."

Keep empty-state illustrations compact.

==================================================
26. LOADING STATES
==================================================

Design Firebase-friendly loading UX.

Use:
- Skeleton cards for posts
- Skeleton task rows
- Skeleton dashboard stats
- Button spinner for form submission
- Avatar skeleton
- Table skeleton

Avoid full-screen spinners for routine data fetching.

==================================================
27. ERROR AND FEEDBACK SYSTEM
==================================================

Create reusable:

- Success toast
- Error toast
- Warning toast
- Info toast

Examples:
"Task created successfully"
"Task updated"
"Post published"
"Post deleted"
"Profile updated"
"Password updated"
"Unable to load posts"
"Something went wrong"

Confirmation dialogs:
- Delete task
- Delete post
- Sign out if necessary
- Admin destructive moderation action

Never rely only on toast messages for critical destructive confirmation.

==================================================
28. FIREBASE-SPECIFIC UX STATES
==================================================

Account for:

AUTH:
- Logged out
- Authenticating
- Authenticated
- Password reset requested
- Password reset complete
- Session/auth error

DATA:
- Initial loading
- Empty collection
- Loaded
- Refreshing
- Saving
- Updating
- Deleting
- Network error
- Permission denied

IMAGE UPLOAD:
- Selected
- Preview
- Uploading
- Progress
- Success
- Failed
- Retry

REACTIONS:
Use optimistic feedback carefully for likes/dislikes, then reconcile with backend state.

==================================================
29. RESPONSIVE BEHAVIOR
==================================================

DESKTOP:
- Persistent sidebar
- Multi-column dashboard
- Tables for admin management
- Modal/drawer forms where appropriate

TABLET:
- Collapsible sidebar
- 2-column cards where space permits

MOBILE:
- Single-column
- Bottom navigation for user app
- Compact admin navigation via drawer
- Full-width cards
- Full-screen creation/edit forms
- Bottom sheets for filters
- Tables transform into cards
- Sticky primary actions when useful
- 16px minimum page gutters

Do NOT simply shrink desktop layouts.

Redesign information hierarchy appropriately for mobile.

==================================================
30. ACCESSIBILITY
==================================================

Design for WCAG AA.

Requirements:
- Strong text/background contrast
- Visible keyboard focus
- Logical tab order
- Labels always associated with inputs
- Do not rely on placeholder as label
- 44px touch targets
- Icons accompanied by accessible labels/tooltips where needed
- Error messages adjacent to affected inputs
- Status must not rely on color alone

==================================================
31. REQUIRED SCREENS
==================================================

Generate a coherent screen set including:

AUTHENTICATION
01. Sign Up
02. Sign In
03. Forgot Password
04. Forgot Password Email Sent
05. Reset / Update Password
06. Password Updated Success

USER APPLICATION
07. User Dashboard
08. Add Task
09. My Tasks
10. Edit Task
11. Community / All Posts
12. Create Post
13. Post Details
14. User Profile
15. Edit Profile
16. Settings

ADMIN
17. Admin Dashboard
18. Users Management
19. User Details
20. Admin Post Management
21. Admin Posts Filtered by User
22. Admin Post Details / Moderation

SYSTEM STATES
23. Empty Tasks
24. Empty Community
25. No Search Results
26. Loading State
27. Error State
28. Delete Confirmation
29. 404 / Page Not Found

Generate desktop and mobile versions of all important primary screens.

==================================================
32. UX RULES
==================================================

USER:
Can view all public posts.
Can create public posts.
Can like posts.
Can dislike posts.
Can manage own tasks.
Can edit/delete own content where permitted.

USER CANNOT:
Filter the public feed by individual users.
Access admin tools.
Moderate other users.

ADMIN:
Can access dedicated admin dashboard.
Can view users.
Can search/filter users.
Can filter posts by individual users.
Can inspect posts by author.
Can moderate/delete content according to permissions.

Never expose admin controls in normal user navigation.

==================================================
33. DESIGN CONSISTENCY
==================================================

Maintain one design system across all screens.

Use:
- Same typography
- Same spacing scale
- Same button hierarchy
- Same form patterns
- Same card radius
- Same icons
- Same feedback patterns
- Same color semantics

However, authentication, user dashboard and admin dashboard should each have appropriate layouts for their function.

==================================================
34. DEVELOPER HANDOFF REQUIREMENTS
==================================================

The output should look realistic enough to be directly handed to a frontend developer.

Clearly demonstrate:

- Desktop layout
- Mobile layout
- Navigation behavior
- Form validation
- Loading states
- Empty states
- Error states
- Success states
- Hover states
- Focus states
- Disabled states
- Selected states
- Modal behavior
- Responsive component behavior

Use realistic sample data rather than lorem ipsum.

Example tasks:
"Complete Firebase authentication"
"Prepare project presentation"
"Review dashboard UI"
"Submit client proposal"

Example public posts:
"Finished implementing Firebase authentication"
"Working on my portfolio redesign"
"Completed today's development tasks"

Do not clutter screens with unnecessary decorative content.

The final product should feel like a polished production-ready SaaS application rather than a student CRUD project.

==================================================
35. FINAL OUTPUT
==================================================

Create a complete high-fidelity UI/UX design system and responsive application.

First establish:
1. Design system
2. Authentication
3. User application
4. Community
5. Admin application
6. Responsive mobile versions
7. Application states

Prioritize usability, hierarchy, accessibility, responsive behavior, and implementation feasibility.

Use the uploaded images only as visual inspiration for original flat-vector authentication and empty-state illustrations.

Do not copy their exact compositions, characters, or artwork.