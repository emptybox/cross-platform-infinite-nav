# cross-platform-infinite-nav
A commonJS cross platform system for managing infinite windows similar to the iOS version but also works on Android.

<h3>How to start:</h3>
<ol>
<li>Create a new non-alloy project</li>
<li>Drop all files and folders in the 'Resources' directory (overwrite what is there if there are any conflicts)</li>
<li>Run the app.</li>
</ol>

<h3>How to add/remove a view</h3>
Place the following code in any click handler:<br><br>
<p><code>var child = new ChildView(app,'My First View')</code></p>
<p><code>app.newchild = child;</code></p>
<p><code>Ti.App.fireEvent('childhandler',{action:'add'});</code></p><br><br>
*for removal, just change the 'add' to 'remove'

Enjoy.
