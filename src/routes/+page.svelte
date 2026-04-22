<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {

		const { gsap } = await import('gsap');
		const { SplitText } = await import('gsap/SplitText');
		gsap.registerPlugin(SplitText);

		gsap.from('.detail > *', {
			opacity: 0,
			y: 100,
			stagger: 0.2,
			ease: 'power2.inOut'
		});
	});
</script>

<div class="detail">
	<h2>Tentang Saya</h2>
	<p>
		<a href="https://github.com/dai-rewahandi/basicshoot">basicshoot</a>
		Basicshoot adalah sebuah tool ringan berbasis Bash yang secara otomatis memantau folder screenshot
		Anda dan mempercantik setiap gambar baru dengan sudut membulat yang stylish, efek bayangan (drop shadow),
		latar belakang gradien, dan teks kustom — membuat tangkapan layar (screenshot) Anda tampak menakjubkan
		secara visual tanpa perlu repot.
	</p>
	<p>
		<a href="https://github.com/dai-rewahandi/VScode-Extension-Downloader-app"
			>Vscode Extension Downloader</a
		>
		Aplikasi ini membantu Anda mengunduh ekstensi dari Visual Studio Code Marketplace dengan mudah sebagai
		file .vsix — tanpa perlu membuka VS Code itu sendiri. Aplikasi ini sangat cocok untuk editor alternatif
		berbasis VS Code yang tidak memiliki akses penuh ke Marketplace, atau bagi pengguna yang lebih menyukai
		kendali manual atas ekstensi mereka.
	</p>

	<h2>Alat dan Teknologi yang Sering Saya Gunakan</h2>
	<p>
		Saya menggunakan beberapa tools dan teknologi yang sangat berguna untuk membuat kode-an yang
		baik dan mudah dibaca. Berikut ini adalah daftar tools yang saya gunakan.
	</p>

	<table class="">
		<thead>
			<tr>
				<th>Farmwork</th>
				<th>Toos</th>
				<th>Language</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>NextJS</td>
				<td>NeoVim</td>
				<td>Python</td>
			</tr>
			<tr>
				<td>Astro</td>
				<td>SublimeText</td>
				<td>TypeScript</td>
			</tr>
			<tr>
				<td>Svelte</td>
				<td>VSCode</td>
				<td>Bash</td>
			</tr>
			<tr>
				<td>Flask</td>
				<td>Postman</td>
				<td>Python</td>
			</tr>
			<tr>
				<td></td>
				<td>Drizzle</td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td>Apache</td>
				<td></td>
			</tr>
		</tbody>
	</table>

	<h2>Kontak</h2>
	<p>
		Untuk informasi lebih lanjut atau jika Anda ingin berkolaborasi, jangan ragu untuk menghubungi
		saya melalui:
	</p>

	<ul>
		<li>
			Instagram: <a href="https://instagram.com/dai.rewahandi"
				>https://instagram.com/dai_rewahandi</a
			>
		</li>
		<li>
			Twitter: <a href="https://twitter.com/dai_rewahandi">https://twitter.com/dai_rewahandi</a>
		</li>
		<li>GitHub: <a href="https://github.com/dai-rewahandi">https://github.com/dai-rewahandi</a></li>
		<li>
			Facebook: <a href="https://facebook.com/dai.rewahandi">https://facebook.com/dai_rewahandi</a>
		</li>
		<li>Email: <a href="mailto:nikrodaire@gmail.com">niktodaire@gmail.com</a></li>
	</ul>
</div>
