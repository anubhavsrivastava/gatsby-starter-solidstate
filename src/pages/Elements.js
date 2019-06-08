import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
const IndexPage = () => <Layout fullMenu>
<section id="wrapper">
		<header>
			<div className="inner">
				<h2>Elements</h2>
				<p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
			</div>
		</header>

			<div className="wrapper">
				<div className="inner">

					<section>
						<h3 className="major">Text</h3>
						<p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
						This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
						This is <u>underlined</u> and this is code: <code>for (;;) { `{...}` }</code>. Finally, <a href="/#">this is a link</a>.</p>
						<h4>Blockquote</h4>
						<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
						<h4>Preformatted</h4>
						<pre>
							<code>i = 0;

							while (!deck.isInOrder()) {`{
							print 'Iteration ' + i;
							deck.shuffle();
							i++;
							}`}

	print 'It took ' + i + ' iterations to sort the deck.';
							</code>
						</pre>
					</section>

					<section>
						<h3 className="major">Lists</h3>
						<div className="row">
							<div className="col-6 col-12-medium">
								<h4>Unordered</h4>
								<ul>
									<li>Dolor pulvinar etiam.</li>
									<li>Sagittis adipiscing.</li>
									<li>Felis enim feugiat.</li>
								</ul>
								<h4>Alternate</h4>
								<ul className="alt">
									<li>Dolor pulvinar etiam.</li>
									<li>Sagittis adipiscing.</li>
									<li>Felis enim feugiat.</li>
								</ul>
							</div>
							<div className="col-6 col-12-medium">
								<h4>Ordered</h4>
								<ol>
									<li>Dolor pulvinar etiam.</li>
									<li>Etiam vel felis viverra.</li>
									<li>Felis enim feugiat.</li>
									<li>Dolor pulvinar etiam.</li>
									<li>Etiam vel felis lorem.</li>
									<li>Felis enim et feugiat.</li>
								</ol>
								<h4>Icons</h4>
								<ul className="icons">
									<li><a href="/#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
									<li><a href="/#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
									<li><a href="/#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
									<li><a href="/#" className="icon fa-github"><span className="label">Github</span></a></li>
								</ul>
							</div>
						</div>
						<h4>Actions</h4>
						<div className="row">
							<div className="col-6 col-12-medium">
								<ul className="actions">
									<li><a href="/#" className="button primary">Default</a></li>
									<li><a href="/#" className="button">Default</a></li>
								</ul>
								<ul className="actions small">
									<li><a href="/#" className="button primary small">Small</a></li>
									<li><a href="/#" className="button small">Small</a></li>
								</ul>
								<ul className="actions stacked">
									<li><a href="/#" className="button primary">Default</a></li>
									<li><a href="/#" className="button">Default</a></li>
								</ul>
								<ul className="actions stacked small">
									<li><a href="/#" className="button primary small">Small</a></li>
									<li><a href="/#" className="button small">Small</a></li>
								</ul>
							</div>
							<div className="col-6 col-12-medium">
								<ul className="actions stacked">
									<li><a href="/#" className="button primary fit">Default</a></li>
									<li><a href="/#" className="button fit">Default</a></li>
								</ul>
								<ul className="actions stacked small">
									<li><a href="/#" className="button primary small fit">Small</a></li>
									<li><a href="/#" className="button small fit">Small</a></li>
								</ul>
							</div>
						</div>
						<h4>Pagination</h4>
						<ul className="pagination">
							<li><span className="button small disabled">Prev</span></li>
							<li><a href="/#" className="page active">1</a></li>
							<li><a href="/#" className="page">2</a></li>
							<li><a href="/#" className="page">3</a></li>
							<li><span>&hellip;</span></li>
							<li><a href="/#" className="page">8</a></li>
							<li><a href="/#" className="page">9</a></li>
							<li><a href="/#" className="page">10</a></li>
							<li><a href="/#" className="button small">Next</a></li>
						</ul>
					</section>

					<section>
						<h3 className="major">Table</h3>
						<h4>Default</h4>
						<div className="table-wrapper">
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Item One</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item Two</td>
										<td>Vis ac commodo adipiscing arcu aliquet.</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item Three</td>
										<td> Morbi faucibus arcu accumsan lorem.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item Four</td>
										<td>Vitae integer tempus condimentum.</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item Five</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>29.99</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colSpan="2"></td>
										<td>100.00</td>
									</tr>
								</tfoot>
							</table>
						</div>

						<h4>Alternate</h4>
						<div className="table-wrapper">
							<table className="alt">
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Item One</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item Two</td>
										<td>Vis ac commodo adipiscing arcu aliquet.</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item Three</td>
										<td> Morbi faucibus arcu accumsan lorem.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item Four</td>
										<td>Vitae integer tempus condimentum.</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item Five</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>29.99</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colSpan="2"></td>
										<td>100.00</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</section>

					<section>
						<h3 className="major">Buttons</h3>
						<ul className="actions">
							<li><a href="/#" className="button primary">Primary</a></li>
							<li><a href="/#" className="button">Default</a></li>
						</ul>
						<ul className="actions">
							<li><a href="/#" className="button large">Large</a></li>
							<li><a href="/#" className="button small">Small</a></li>
						</ul>
						<ul className="actions fit">
							<li><a href="/#" className="button fit">Fit</a></li>
							<li><a href="/#" className="button primary fit">Fit</a></li>
							<li><a href="/#" className="button fit">Fit</a></li>
						</ul>
						<ul className="actions fit small">
							<li><a href="/#" className="button primary fit small">Fit + Small</a></li>
							<li><a href="/#" className="button fit small">Fit + Small</a></li>
							<li><a href="/#" className="button primary fit small">Fit + Small</a></li>
						</ul>
						<ul className="actions">
							<li><a href="/#" className="button primary icon fa-download">Icon</a></li>
							<li><a href="/#" className="button icon fa-download">Icon</a></li>
						</ul>
						<ul className="actions">
							<li><span className="button primary disabled">Disabled</span></li>
							<li><span className="button disabled">Disabled</span></li>
						</ul>
					</section>

					<section>
						<h3 className="major">Form</h3>
						<form method="post" action="#">
							<div className="row gtr-uniform">
								<div className="col-6 col-12-xsmall">
									<label htmlFor="demo-name">Name</label>
									<input type="text" name="demo-name" id="demo-name" defaultValue="" />
								</div>
								<div className="col-6 col-12-xsmall">
									<label htmlFor="demo-email">Email</label>
									<input type="email" name="demo-email" id="demo-email" defaultValue="" />
								</div>
								<div className="col-12">
									<label htmlFor="demo-category">Category</label>
									<select name="demo-category" id="demo-category">
										<option value="">-</option>
										<option value="1">Manufacturing</option>
										<option value="1">Shipping</option>
										<option value="1">Administration</option>
										<option value="1">Human Resources</option>
									</select>
								</div>
								<div className="col-4 col-12-small">
									<input type="radio" id="demo-priority-low" name="demo-priority" defaultChecked/>
									<label htmlFor="demo-priority-low">Low Priority</label>
								</div>
								<div className="col-4 col-12-small">
									<input type="radio" id="demo-priority-normal" name="demo-priority" />
									<label htmlFor="demo-priority-normal">Normal Priority</label>
								</div>
								<div className="col-4 col-12-small">
									<input type="radio" id="demo-priority-high" name="demo-priority" />
									<label htmlFor="demo-priority-high">High Priority</label>
								</div>
								<div className="col-6 col-12-small">
									<input type="checkbox" id="demo-copy" name="demo-copy" />
									<label htmlFor="demo-copy">Email me a copy</label>
								</div>
								<div className="col-6 col-12-small">
									<input type="checkbox" id="demo-human" name="demo-human" defaultChecked /> 
									<label htmlFor="demo-human">Not a robot</label>
								</div>
								<div className="col-12">
									<label htmlFor="demo-message">Message</label>
									<textarea name="demo-message" id="demo-message" rows="6"></textarea>
								</div>
								<div className="col-12">
									<ul className="actions">
										<li><input type="submit" value="Send Message" className="primary" /></li>
										<li><input type="reset" value="Reset" /></li>
									</ul>
								</div>
							</div>
						</form>
					</section>

					<section>
						<h3 className="major">Image</h3>
						<h4>Fit</h4>
						<div className="box alt">
							<div className="row gtr-uniform">
								<div className="col-12"><span className="image fit"><img src={pic8} alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span></div>
							</div>
						</div>
						<h4>Left &amp; Right</h4>
						<p><span className="image left"><img src={pic1} alt="" /></span>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien. Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</p>
						<p><span className="image right"><img src={pic2} alt="" /></span>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius. Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat. Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui.</p>
					</section>

				</div>
			</div>

	</section>

</Layout>;

export default IndexPage;
