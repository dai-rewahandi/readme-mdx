<script lang="ts">
	import Icon from '@iconify/svelte';
	import gsap from 'gsap';
	import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
	import { onMount } from 'svelte';
	import eye from '../../../lib/assets/icons8-eye.gif';

	gsap.registerPlugin(ScrambleTextPlugin);

	onMount(() => {
		const tl = gsap.timeline({
			id: 'title-animation',
			defaults: {
				ease: 'power2.inOut',
				duration: 2
			}
		});
		tl.to('#title', {
			scrambleText: {
				text: 'Dai_rewahandi',
				chars: 'abcdefghijklmnopqrstuvwxyz1234567890@#$%^&*()_=+-,./?`~'
			}
		});
	});
</script>

<nav class="flex h-32 items-center justify-between">
	<div class="flex items-center gap-2">
		<img src={eye} alt="eye" class="h-5 w-5" />
		<span id="title" class="flex">Dairewahandi</span>
	</div>
	<div
		class="flex gap-2 [&>a]:cursor-pointer [&>a]:rounded-full [&>a]:p-1 [&>a]:transition-transform [&>a]:duration-100 [&>a]:hover:scale-120 [&>a]:hover:bg-gray-200"
	>
		<a href="#" aria-label="Instagram">
			<Icon icon="line-md:instagram" />
		</a>
		<a href="#" aria-label="Facebook">
			<Icon icon="line-md:facebook" />
		</a>
		<a href="#" aria-label="GitHub">
			<Icon icon="line-md:github" />
		</a>
		<a href="#" aria-label="Twitter">
			<Icon icon="line-md:twitter-x" />
		</a>
	</div>
</nav>
