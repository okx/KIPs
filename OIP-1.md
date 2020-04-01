---
OIP: 1
title: OIP Purpose and Guidelines
status: Active
type: Meta
author: OKChain core developers <okchain@okcoin.net> 
created: 2020-04-01
updated: 2020-04-01
---

## What is an OIP?

OIP stands for OKChain Improvement Proposal. An OIP is a design document providing information to the OKChain community, or describing a new feature for OKChain or its processes or environment. The OIP should provide a concise technical specification of the feature and a rationale for the feature. The OIP author is responsible for building consensus within the community and documenting dissenting opinions.

## OIP Rationale

We intend OIPs to be the primary mechanisms for proposing new features, for collecting community technical input on an issue, and for documenting the design decisions that have gone into OKChain. Because the OIPs are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

For OKChain implementers, OIPs are a convenient way to track the progress of their implementation. Ideally each implementation maintainer would list the OIPs that they have implemented. This will give end users a convenient way to know the current status of a given implementation or library.

## OIP Types

There are three types of OIP:

- A **Standard Track OIP** describes any change that affects most or all OKChain implementations, such as a change to the network protocol, a change in block or transaction validity rules, proposed application standards/conventions, or any change or addition that affects the interoperability of applications using OKChain. Furthermore Standard OIPs can be broken down into the following categories. 
  - **Matchingtrading Engine** - improvements around matching trading engine.
  - **Application Module** - includes improvements around module-level standards, like Bank, Dex, and Bankend. 
  - **Interface** - includes improvements around client [API/RPC] specifications and standards, and also certain language-level standards . The label “interface” aligns with the [interfaces repo] and discussion should primarily occur in that repository before an OIP is submitted to the OIPs repository.

- A **Meta OIP** describes a process surrounding OKChain or proposes a change to (or an event in) a process. Process OIPs are like Standards Track OIPs but apply to areas other than the OKChain protocol itself. They may propose an implementation, but not to OKChain's codebase; they often require community consensus;  they are more than recommendations, and users are typically not free to ignore them. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in OKChain development. Any meta-OIP is also considered a Process OIP.


It is highly recommended that a single OIP contain a single key proposal or new idea. The more focused the OIP, the more successful it tends to be. A change to one client doesn't require an OIP; a change that affects multiple clients, or defines a standard for multiple apps to use, does.

An OIP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement. The proposed implementation, if applicable, must be solid and must not complicate the protocol unduly.



## OIP Work Flow

### Shepherding an OIP

Parties involved in the process are you, the champion or *OIP author*, the [*OIP editors*](#OIP-editors), and the [*OKChain Core Developers*](https://github.com/okex/okchain-pm).

Before you begin writing a formal OIP, you should vet your idea. Ask the OKChain community first if an idea is original to avoid wasting time on something that will be be rejected based on prior research. It is thus recommended to open a discussion thread on [the OKChain Magicians forum] to do this, but you can also use [one of the OKChain Gitter chat rooms], [the OKChain subreddit] or [the Issues section of this repository]. 

In addition to making sure your idea is original, it will be your role as the author to make your idea clear to reviewers and interested parties, as well as inviting editors, developers and community to give feedback on the aforementioned channels. You should try and gauge whether the interest in your OIP is commensurate with both the work involved in implementing it and how many parties will have to conform to it. For example, the work required for implementing a Core OIP will be much greater than for an ERC and the OIP will need sufficient interest from the OKChain client teams. Negative community feedback will be taken into consideration and may prevent your OIP from moving past the Draft stage.

### Matching trading Engine OIPs

For Matching trading Engine OIPs, given that they require client implementations to be considered **Final** (see "OIPs Process" below), you will need to either provide an implementation for clients or convince clients to implement your OIP. 

The best way to get client implementers to review your OIP is to present it on an AllCoreDevs call. You can request to do so by posting a comment linking your OIP on an [AllCoreDevs agenda GitHub Issue].  

The AllCoreDevs call serve as a way for client implementers to do three things. First, to discuss the technical merits of OIPs. Second, to gauge what other clients will be implementing. Third, to coordinate OIP implementation for network upgrades.

These calls generally result in a "rough consensus" around what OIPs should be implemented. This "rough consensus" rests on the assumptions that OIPs are not contentious enough to cause a network split and that they are technically sound.

warning: The OIPs process and AllCoreDevs call were not designed to address contentious non-technical issues, but, due to the lack of other ways to address these, often end up entangled in them. This puts the burden on client implementers to try and gauge community sentiment, which hinders the technical coordination function of OIPs and AllCoreDevs calls. If you are shepherding an OIP, you can make the process of building community consensus easier by making sure that [the OKChain Magicians forum] thread for your OIP includes or links to as much of the community discussion as possible and that various stakeholders are well-represented.

*In short, your role as the champion is to write the OIP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea.* 

### OIP Process 

Following is the process that a successful non-Matching trading Engine OIP will move along:

```
[ WIP ] -> [ DRAFT ] -> [ LAST CALL ] -> [ FINAL ]
```

Following is the process that a successful Matching trading Engine OIP will move along:

```
[ IDEA ] -> [ DRAFT ] -> [ LAST CALL ] -> [ ACCEPTED ] -> [ FINAL ]
```

Each status change is requested by the OIP author and reviewed by the OIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your OIP. The OIP editors will process these requests as per the conditions below.

* **Idea** -- Once the champion has asked the OKChain community whether an idea has any chance of support, they will write a draft OIP as a [pull request]. Consider including an implementation if this will aid people in studying the OIP.
  * :arrow_right: Draft -- If agreeable, OIP editor will assign the OIP a number (generally the issue or PR number related to the OIP) and merge your pull request. The OIP editor will not unreasonably deny an OIP.
  * :x: Draft -- Reasons for denying draft status include being too unfocused, too broad, duplication of effort, being technically unsound, not providing proper motivation or addressing backwards compatibility.
* **Draft** -- Once the first draft has been merged, you may submit follow-up pull requests with further changes to your draft until such point as you believe the OIP to be mature and ready to proceed to the next status. An OIP in draft status must be implemented to be considered for promotion to the next status (ignore this requirement for core OIPs).
  * :arrow_right: Last Call -- If agreeable, the OIP editor will assign Last Call status and set a review end date (`review-period-end`), normally 14 days later.
  * :x: Last Call -- A request for Last Call status will be denied if material changes are still expected to be made to the draft. We hope that OIPs only enter Last Call once, so as to avoid unnecessary noise on the RSS feed.
* **Last Call** -- This OIP will listed prominently on the website (subscribe via RSS at [last-call.xml](/last-call.xml)).
  * :x: -- A Last Call which results in material changes or substantial unaddressed technical complaints will cause the OIP to revert to Draft.
  * :arrow_right: Accepted (Core OIPs only) -- A successful Last Call without material changes or unaddressed technical complaints will become Accepted.
  * :arrow_right: Final (Non-Core OIPs) -- A successful Last Call without material changes or unaddressed technical complaints will become Final.
* **Accepted (Core OIPs only)** -- This status signals that material changes are unlikely and OKChain client developers should consider this OIP for inclusion. Their process for deciding whether to encode it into their clients as part of a hard fork is not part of the OIP process.
  * :arrow_right: Draft -- The Core Devs can decide to move this OIP back to the Draft status at their discretion. E.g. a major, but correctable, flaw was found in the OIP.
  * :arrow_right: Rejected -- The Core Devs can decide to mark this OIP as Rejected at their discretion. E.g. a major, but uncorrectable, flaw was found in the OIP.
  * :arrow_right: Final -- Standards Track Core OIPs must be implemented in at least three viable OKChain clients before it can be considered Final. When the implementation is complete and adopted by the community, the status will be changed to “Final”.
* **Final** -- This OIP represents the current state-of-the-art. A Final OIP should only be updated to correct errata.

Other exceptional statuses include:

* **Active** -- Some Informational and Process OIPs may also have a status of “Active” if they are never meant to be completed. E.g. OIP 1 (this OIP).
* **Abandoned** -- This OIP is no longer pursued by the original authors or it may not be a (technically) preferred option anymore.
  * :arrow_right: Draft -- Authors or new champions wishing to pursue this OIP can ask for changing it to Draft status.
* **Rejected** -- An OIP that is fundamentally broken or a Core OIP that was rejected by the Core Devs and will not be implemented. An OIP cannot move on from this state.
* **Superseded** -- An OIP which was previously Final but is no longer considered state-of-the-art. Another OIP will be in Final status and reference the Superseded OIP. An OIP cannot move on from this state.

## What belongs in a successful OIP?

Each OIP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the OIP, including the OIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details. See [below]() for details.
- Abstract - A short (~200 word) description of the technical issue being addressed.
- Motivation (*optional) - The motivation is critical for OIPs that want to change the OKChain protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the OIP solves. OIP submissions without sufficient motivation may be rejected outright.
- Specification - The technical specification should describe the syntax and semantics of any new feature. The specification should be detailed enough to allow competing, interoperable implementations for any of the current OKChain platforms (go-okchain,[and others]().
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Backwards Compatibility - All OIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The OIP must explain how the author proposes to deal with these incompatibilities. OIP submissions without a sufficient backwards compatibility treatise may be rejected outright.
- Test Cases - Test cases for an implementation are mandatory for OIPs that are affecting consensus changes. Other OIPs can choose to include links to test cases if applicable.
- Implementations - The implementations must be completed before any OIP is given status “Final”, but it need not be completed before the OIP is merged as draft. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of “rough consensus and running code” is still useful when it comes to resolving many discussions of API details.
- Security Considerations - All OIPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surfaces risks and can be used throughout the life cycle of the proposal. E.g. include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks and how they are being addressed. OIP submissions missing the "Security Considerations" section will be rejected. An OIP cannot proceed to status "Final" without a Security Considerations discussion deemed sufficient by the reviewers.
- Copyright Waiver - All OIPs must be in the public domain. See the bottom of this OIP for an example copyright waiver.

## OIP Formats and Templates

OIPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that OIP as follows: `assets/OIP-N` (where **N** is to be replaced with the OIP number). When linking to an image in the OIP, use relative links such as `../assets/OIP-1/image.png`.

## OIP Header Preamble

Each OIP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "*" are optional and are described below. All other headers are required.

` OIP:` *OIP number* (this is determined by the OIP editor)

` title:` *OIP title*

` author:` *a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.*

` * discussions-to:` *a url pointing to the official discussion thread*

` status:` *Draft | Last Call | Accepted | Final | Active | Abandoned | Rejected | Superseded*

`* review-period-end:` *date review period ends*

` type:` *Standards Track | Informational | Meta*

` * category:` *Core | Networking | Interface | ERC* (Standards Track OIPs only)

` created:` *date created on*

` * updated:` *comma separated list of dates*

` * requires:` *OIP number(s)*

` * replaces:` *OIP number(s)*

` * superseded-by:` *OIP number(s)*

` * resolution:` *a url pointing to the resolution of this OIP*

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the OIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `resolution` header

The `resolution` header is required for Standards Track OIPs only. It contains a URL that should point to an email message or other web resource where the pronouncement about the OIP is made.

#### `discussions-to` header

While an OIP is a draft, a `discussions-to` header will indicate the mailing list or URL where the OIP is being discussed. As mentioned above, examples for places to discuss your OIP include [OKChain topics on Gitter](), an issue in this repo or in a fork of this repo, [OKChain Magicians]() (this is suitable for OIPs that may be contentious or have a strong governance aspect), and [Reddit r/OKChain]().

No `discussions-to` header is necessary if the OIP is being discussed privately with the author.

As a single exception, `discussions-to` cannot point to GitHub pull requests.

#### `type` header

The `type` header specifies the type of OIP: Standards Track, Meta, or Informational. If the track is Standards please include the subcategory (core, networking, interface, or ERC).

#### `category` header

The `category` header specifies the OIP's category. This is required for standards-track OIPs only.

#### `created` header

The `created` header records the date that the OIP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the OIP was updated with "substantial" changes. This header is only valid for OIPs of Draft and Active status.

#### `requires` header

OIPs may have a `requires` header, indicating the OIP numbers that this OIP depends on.

#### `superseded-by` and `replaces` headers

OIPs may also have a `superseded-by` header indicating that an OIP has been rendered obsolete by a later document; the value is the number of the OIP that replaces the current document. The newer OIP must have a `replaces` header containing the number of the OIP that it rendered obsolete.

## Auxiliary Files

OIPs may include auxiliary files such as diagrams. Such files must be named OIP-XXXX-Y.ext, where “XXXX” is the OIP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## Transferring OIP Ownership

It occasionally becomes necessary to transfer ownership of OIPs to a new champion. In general, we'd like to retain the original author as a co-author of the transferred OIP, but that's really up to the original author. A good reason to transfer ownership is because the original author no longer has the time or interest in updating it or following through with the OIP process, or has fallen off the face of the 'net (i.e. is unreachable or isn't responding to email). A bad reason to transfer ownership is because you don't agree with the direction of the OIP. We try to build consensus around an OIP, but if that's not possible, you can always submit a competing OIP.

If you are interested in assuming ownership of an OIP, send a message asking to take over, addressed to both the original author and the OIP editor. If the original author doesn't respond to email in a timely manner, the OIP editor will make a unilateral decision (it's not like such decisions can't be reversed :)).

## OIP Editors

The current OIP editors are

` * Nick Johnson (@arachnid)`

` * Casey Detrio (@cdetrio)`

` * Hudson Jameson (@Souptacular)`

` * Vitalik Buterin (@vbuterin)`

` * Nick Savers (@nicksavers)`

` * Martin Becze (@wanderer)`

` * Greg Colvin (@gcolvin)`

` * Alex Beregszaszi (@axic)`

## OIP Editor Responsibilities

For each new OIP that comes in, an editor does the following:

- Read the OIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the OIP for language (spelling, grammar, sentence structure, etc.), markup (GitHub flavored Markdown), code style

If the OIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the OIP is ready for the repository, the OIP editor will:

- Assign an OIP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this OIP)

- Merge the corresponding pull request

- Send a message back to the OIP author with the next step.

Many OIPs are written and maintained by developers with write access to the OKChain codebase. The OIP editors monitor OIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on OIPs. We merely do the administrative & editorial part.

## History

This document was derived heavily from [OKChain's OIP-0001] written by Martin Becze, Hudson Jameson, and others which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use in the OKChain Improvement Process, and should not be bothered with technical questions specific to OKChain or the OIP. Please direct all comments to the OIP editors.




See [the revision history for further details](https://github.com/okex/OIPs/commits/master/OIP-1.md), which is also available by clicking on the History button in the top right of the OIP.

### Bibliography


[API/RPC]: https://documenter.getpostman.com/view/1112175/SzS5u6bE?version=latest
[interfaces repo]: https://github.com/okex/okchain-interfaces
[pull request]: https://github.com/okex/OIPs/pulls
[the Issues section of this repository]: https://github.com/okex/OIPs/issues
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[OKChain's OIP-0001]: https://oips.okchain.org/OIPS/oip-1
[Python's PEP-0001]: https://www.python.org/dev/peps/
[AllCoreDevs agenda GitHub Issue]: https://github.com/okex/okchain-pm/issues

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


