---
layout: default
title: Expository Notes
---

# Expository Notes
<p class="center">Correctness is not guaranteed; proceed with caution and please <a href="/contact.html">notify me</a> of any errors.</p>

<img src="/assets/images/expos.png" class="full" alt="Betts Geometrical Psychology">

<p class="center"><i>&ldquo;Unfortunately, not all the world is as funny as the one we're making.&rdquo;</i> — John Cage.</p>

<div id="toggle-all">
    <button id="toggle-all-button" class="font3">EXPAND ALL</button>
</div>

<ul>
    <li>
        <div class="post">
            <div>
                <h2 class="post-title-row">
                    <a href="/assets/files/hopf-algebras.pdf" class="pdf-link" target="_blank">The Symmetry of Hopf Algebras</a>
                    <button class="accordion-btn"></button>
                </h2>
            </div>
            <div class="accordion-panel">
                <p class="justified-line font3">
                    <span>
                        TAGS: algebra, combinatorics.
                    </span>
                    <span class="right">
                        9 JULY 2025
                    </span>
                </p>
                <p> 
                    Hopf algebras possess an incredibly rich algebraic structure, which explains their prominent role in quantum theory, classical algebra, and even combinatorics. We define Hopf algebras in quite an abstract way, but its structure arises in surprisingly concrete applications to the theory of symmetric functions. For example, the first Hopf algebra we investigate is the shuffle algebra, which models the various ways we can shuffle words together. Naturally, one might expect applications to cryptography, formal languages, and DNA sequencing. The shuffle algebra is unexpectedly related to various classes of symmetric algebras, which notably bear a more rigid structure than the shuffle algebra. There is a preliminary hope that these more elaborate structures might have something to say in the aforementioned applications.
                </p>
            </div>
        </div>
    </li>
    <li>
        <div class="post">
            <div>
                <h2 class="post-title-row">
                    <a href="/assets/files/submanifolds.pdf" class="pdf-link" target="_blank">Submanifolds in Euclidean Space</a>
                    <button class="accordion-btn"></button>
                </h2>
            </div>
            <div class="accordion-panel">
                <p class="justified-line font3">
                    <span>
                        TAGS: differential geometry, differential topology.
                    </span>
                    <span class="right">
                        4 JULY 2025
                    </span>
                </p>
                <p> 
                    Manifolds are the central object of study in differential geometry, and the natural extension of classical geometry on Euclidean (flat) spaces. Although not a precise definition, a manifold is a space that "looks like" Euclidean space on every sufficiently zoomed-in region. Such structures arise in the world around us at an even higher frequency than the over-idealistic Euclidean spaces: the surface of the Earth, the shape of a protein structure, and a doughnut are all examples of manifolds. The theory of manifolds is crucial to philosophical questions ("can an ant distinguish whether it is trawling across a doughnut versus a sphere?") and to our practical understanding of the world we inhabit (most notably in the theory of general relativity).<br>In these notes, we restrict our attention to manifolds that naturally live in Euclidean space. For these objects, the basic tools of calculus (namely the inverse and implicit function theorems) provide four interchangeable criteria for identifying manifold structures.
                </p>
                <a href="https://docs.google.com/document/d/1tXLPwD0YQpO9gVpMt1VGUy7qQ1Rde89fsO9sHEwwLdE/edit?usp=sharing" target="_blank">Revision history
                </a>
            </div>
        </div>
    </li>
    <li>
        <div class="post">
            <div>
                <h2 class="post-title-row">
                    <a href="/assets/files/nets.pdf" class="pdf-link" target="_blank">Weaving a Wider Net: A First Course in Topology</a>
                    <button class="accordion-btn"></button>
                </h2>
            </div>
            <div class="accordion-panel">
                <p class="justified-line font3">
                    <span>
                        TAGS: topology.
                    </span>
                    <span class="right">
                        21 JUNE 2025
                    </span>
                </p>
                <p>
                WARNING: This is a very minimum viable product. The last few sections need much polishing, but I figured I'd just put this up now because it's frankly not what I want to work on at the moment. Feedback is appreciated more than ever :)<br>This is intended as an accessible survey of topology, placing an unorthodox emphasis on nets. We assume only a basic familiarity with sets from the naive point of view. A first-year undergraduate course in calculus would help motivate certain examples in this work, but it is not strictly necessary.<br>Given a pair of sets, a topology on each set is the minimal amount of structure we must impose to discuss continuity of functions between them. More specifically, a topology is a designation of certain subsets to be `open', the prototype being open intervals of the real number line. Continuity, as a topological condition, is usually formulated in terms of the behaviour of the function between these open sets.<br>More pertinently, almost every function humankind has encountered in the hostile universe has been continuous with respect to some canonical topology: the positions of the Earth, Moon, and Sun from now until the end of this age; the ebb and flow of traffic on your way to work; the forces pushing and pulling at the meadowlark as it skips through the sky. Or, it may be more accurate to say that our present formulation of continuity, thus topology and its canon, has been modeled after the observable universe. With this perspective, continuity is a standard that every `reasonable' function we propose to carve nature at its joints should strive to meet. Failure to do so could signal an inadequacy of either the theorized function (as occurs in a reputable lab every hour) or the paradigmal topology used to describe this phenomenon (as in the curious case of quantum mechanics).<br>A topology is similarly the minimal amount of structure we must impose on a set to discuss the convergence of sequences, or as we will consider, nets. Readers familiar with sequences should understand nets as a generalization of sequences allowing the indexing set to be not necessarily the natural numbers, but any set with a sufficiently nice ordering. Those unfamiliar with sequences should spend more time acquainting themselves with sections 2 and 3.
                </p>
            </div>
        </div>
    </li>
    <li>
        <div class="post">
            <div>
                <h2 class="post-title-row">
                    <a href="/assets/files/sheaf.pdf" class="pdf-link" target="_blank">Sheaving on the Prime Spectrum</a>
                    <button class="accordion-btn"></button>
                </h2>
            </div>
            <div class="accordion-panel">
                <p class="justified-line font3">
                    <span>
                        TAGS: algebraic geometry, commutative algebra.
                    </span>
                    <span class="right">
                        2 JUNE 2025
                    </span>
                </p>
                <p> 
                    Sheaves are the pillars of modern algebraic geometry. It is more accurate to think of sheaves as an extension of a topological space to facilitate the addition of further structure, rather than an additional structure itself. It may be helpful to think of a nation consisting of many provinces, which in turn consist of cities, containing neighbourhoods, and so on. Each level in this hierarchy has a set of policies; these are the sections of the presheaf. They act as a template for adding new structures. We also have rules describing how policies are passed down from the federal to the provincial, to the municipal, and so on; these are the restriction maps. This information defines a presheaf. Of course, this presheaf is only useful if we can guarantee that the various local policies inherited from the global policy can interact consistently; this is precisely the condition that makes the presheaf into a sheaf.<br>These notes construct a sheaf of rings on the prime spectrum, the set of prime ideals, of a commutative ring, using localization, radicalization, and saturation as its main tools. Algebraic geometry frequently applies geometric techniques to the prime ideals of a ring in order to study the ring's algebraic structure. This sheaf of rings provides the most common template for geometric constructions on the prime spectrum.
                </p>
            </div>
        </div>
    </li>
    <li>
        <div class="post">
            <div>
                <h2 class="post-title-row">
                    <a href="/assets/files/ring-of-germs.pdf" class="pdf-link" target="_blank">A Ring of Germs</a>
                    <button class="accordion-btn"></button>
                </h2>
            </div>
            <div class="accordion-panel">
                <p class="justified-line font3">
                    <span>
                        TAGS: differential topology, algebraic geometry.
                    </span>
                    <span class="right">
                        9 APRIL 2025
                    </span>
                </p>
                <p> 
                    Recall that a manifold is a topological space that looks like Euclidean (flat) space at sufficiently small regions. Manifolds occur inescapably in general relativity and statistics, and in these applications it is highly necessary to develop the tools of calculus, namely differentiation and integration, on manifolds. Just as the derivative of a function in one variable provides a rigorous description of the tangent line to the graph of the function, derivatives of functions between manifolds describe a Euclidean space that is "tangent" to the manifold, called the tangent space.<br>There exist countless equivalent constructions of the tangent space, each one more fluent for a different subfield of math, physics, or statistics. We construct the algebraic geometer's definition of a tangent space to a manifold. Intuitively, we consider the behaviour of smooth functions on the manifold at a single point, called germs. The germs that vanish at this point but whose derivatives do not capture all the directions tangent to the manifold at this point. In essence, these germs determine the tangent space. After completing this description of the tangent space, we conclude by characterizing the derivative of a smooth function between manifolds in terms of their tangent spaces.
                </p>
            </div>
        </div>
    </li>
    <li>
        <div class="post">
            <div>
                <h2 class="post-title-row">
                    <a href="/assets/files/zariski-topology.pdf" class="pdf-link" target="_blank">The Zariski Topology: Naive To Nonsense</a>
                    <button class="accordion-btn"></button>
                </h2>
            </div>
            <div class="accordion-panel">
                <p class="justified-line font3">
                    <span>
                        TAGS: commutative algebra, algebraic geometry, topology.
                    </span>
                    <span class="right">
                        23 MARCH 2025
                    </span>
                </p>
                <p> 
                    The motto of modern geometry, both differential and algebraic, is "state globally, prove locally". This means we zoom in enough to simplify the problem space, collect data, and assemble local (zoomed in) data to deduce global properties. The motivation for this pattern is that the shapes of greatest interest are too elaborate for classical global geometry techniques. Simple local behaviours can be pieced together in incredibly rich ways, such that there would be no hope in studying these shapes on a global scale.<br>In algebraic geometry, we study the geometric characteristics of the prime spectrum (set of prime ideals) of a ring, which provides a great deal of insight into the ring itself. To apply our most cutting-edge geometric techniques, we give the prime spectrum a topological structure, the most common being the Zariski topology.<br>We investigate three incarnations of the Zariski topology. The first and most specific is formed from solution sets to polynomial equations. The second is defined directly from the prime ideals, and is the most relevant to modern algebraic geometry. The third is more category-theoretic in nature, and generalizes the previous constructions to capture the ordinal symmetry in their formulations.
                </p>
            </div>
        </div>
    </li>
    <li>
        <div class="post">
            <div>
                <h2 class="post-title-row">
                    <a href="/assets/files/existence-without-uniqueness.pdf" class="pdf-link" target="_blank">Existence Without Uniqueness</a>
                    <button class="accordion-btn"></button>
                </h2>
            </div>
            <div class="accordion-panel">
                <p class="justified-line font3">
                    <span>
                        TAGS: ordinary differential equations.
                    </span>
                    <span class="right">
                        6 MARCH 2025
                    </span>
                </p>
                <p>
                    To an overwhelming majority of all humans, mathematics is about "solving equations". But at the frontier of science and in life, determining whether a solution even exists is often more difficult than searching for a solution, provided the knowledge that it exists. Differential equations, or equations involving an unknown function and its derivatives, have consistently supplied some of the richest and most intractable mathematical equations over the last three-and-a-half centuries. A solution to a differential equation is a function that, along with its derivatives, satisfies the equation at every point in its domain. We are certain that a solution exists for only a speck in the space of all differential equations. Furthermore, we often avariciously desire not only that a solution exists, but that there is exactly one solution passing through a given point. This is even harder to achieve. The desperate search for differential equations fulfilling these two prophecies, existence and uniqueness, forms a large part of differential equations theory and research.<br>The Cauchy-Peano Theorem was presented with an incorrect proof in 1886 and a correct proof four years later. It addresses a remarkably broad class of ordinary differential equations, yet remains in limbo between reverence and insignificance because it treats only existence, and fails to draw any conclusions regarding uniqueness. Despite its shortcomings, its proof, which we present in these notes, is one of the most constructive and erudite in the entire theory of ordinary differential equations.
                </p>
            </div>
        </div>
    </li>
    <li>
        <div class="post">
            <div>
                <h2 class="post-title-row">
                    <a href="/assets/files/sum-of-two-squares.pdf" class="pdf-link" target="_blank">Sums of Two Squares</a>
                    <button class="accordion-btn"></button>
                </h2>
            </div>
            <div class="accordion-panel">
                <p class="justified-line font3">
                    <span>
                        TAGS: algebraic number theory.
                    </span>
                    <span class="right">
                        25 JANUARY 2025
                    </span>
                </p>
                <p> 
                    Which positive integers may be expressed as a sum of two perfect squares? This innocent-looking problem stumped classical number theorists for centuries, and to this day puts forth a convincing case for the necessity of high-technology algebraic and analytic tools in the study of the structure of numbers. A common algebraic tool used in number theory is the theory of rings, which are an algebraic model of the integers, among other structures including polynomials and functions. In essence, a ring is a set furnished with addition and multiplication operations, satisfying the expected algebraic properties such as the distributive law.<br>The proof in these notes expounds on the reformulation of the sum of two squares problem as a question about rings, and uses elementary ring theory techniques to deduce a comprehensive answer.
                </p>
            </div>
        </div>
    </li>
    <li>
        <div class="post">
            <div>
                <h2 class="post-title-row">
                    <a href="/assets/files/cell-complexes.pdf" class="pdf-link" target="_blank">Topology of Cell Complexes</a>
                    <button class="accordion-btn"></button>
                </h2>
            </div>
            <div class="accordion-panel">
                <p class="justified-line font3">
                    <span>
                        TAGS: algebraic topology.
                    </span>
                    <span class="right">
                        2 JANUARY 2025
                    </span>
                </p>
                <p> 
                    Spheres, undirected graphs, projective spaces, and manifolds: these are all spaces that admit a cell complex structure. This great generality is quite surprising from the procedure according to which we construct of cell complexes, which is essentially an iterative process of gluing disks (filled-in spheres) together. This construction comes with an elegant and relatively computable description of the topological properties of the space, which assists in the classification of physical, chemical, and data structures according to their physical, chemical, and combinatorial properties. Topological invariants have found applications in computer algorithms, knot theory, string theory, nanomaterials, and semiconductors.<br>In these notes, we construct cell complexes, and prove several key properties of their topological structure.
                </p>
            </div>
        </div>
    </li>
</ul>

---