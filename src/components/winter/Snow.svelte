<style>
	.snowflake {
		--size: 1vw;
		color: #fff;
		border-radius: 50%;
		height: var(--size);
		position: absolute;
		top: -5vh;
		width: var(--size);
		z-index: 9999;
	}

	@-webkit-keyframes snowfall {
		0% {
			transform: translate3d(var(--left-ini), 0, 0);
		}

		to {
			transform: translate3d(var(--left-end), 110vh, 0);
		}
	}

	@keyframes snowfall {
		0% {
			transform: translate3d(var(--left-ini), 0, 0);
		}

		to {
			transform: translate3d(var(--left-end), 110vh, 0);
		}
	}

	.snowflake:first-child {
		--size: 0.6vw;
		--left-ini: -2vw;
		--left-end: 8vw;
		-webkit-animation: snowfall 12s linear infinite;
		animation: snowfall 12s linear infinite;
		-webkit-animation-delay: -7s;
		animation-delay: -7s;
		left: 81vw;
	}

	.snowflake:nth-child(2) {
		--size: 0.4vw;
		--left-ini: -4vw;
		--left-end: 10vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -3s;
		animation-delay: -3s;
		left: 89vw;
	}

	.snowflake:nth-child(3) {
		--size: 0.1vw;
		--left-ini: -4vw;
		--left-end: -8vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -10s;
		animation-delay: -10s;
		left: 45vw;
	}

	.snowflake:nth-child(4) {
		--size: 0.3vw;
		--left-ini: -6vw;
		--left-end: 7vw;
		-webkit-animation: snowfall 13s linear infinite;
		animation: snowfall 13s linear infinite;
		-webkit-animation-delay: -7s;
		animation-delay: -7s;
		left: 39vw;
	}

	.snowflake:nth-child(5) {
		--size: 0.2vw;
		--left-ini: -8vw;
		--left-end: -3vw;
		-webkit-animation: snowfall 9s linear infinite;
		animation: snowfall 9s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 26vw;
	}

	.snowflake:nth-child(6) {
		--size: 0.4vw;
		--left-ini: 9vw;
		--left-end: 5vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -5s;
		animation-delay: -5s;
		left: 21vw;
	}

	.snowflake:nth-child(7) {
		--size: 0.6vw;
		--left-ini: 6vw;
		--left-end: -4vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 47vw;
	}

	.snowflake:nth-child(8) {
		--size: 0.4vw;
		--left-ini: -3vw;
		--left-end: 9vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -7s;
		animation-delay: -7s;
		left: 41vw;
	}

	.snowflake:nth-child(9) {
		--size: 0.4vw;
		--left-ini: -7vw;
		--left-end: 8vw;
		-webkit-animation: snowfall 6s linear infinite;
		animation: snowfall 6s linear infinite;
		-webkit-animation-delay: -10s;
		animation-delay: -10s;
		left: 6vw;
	}

	.snowflake:nth-child(10) {
		--size: 0.1vw;
		--left-ini: -4vw;
		--left-end: 0vw;
		-webkit-animation: snowfall 13s linear infinite;
		animation: snowfall 13s linear infinite;
		-webkit-animation-delay: -5s;
		animation-delay: -5s;
		left: 11vw;
	}

	.snowflake:nth-child(11) {
		--size: 0.4vw;
		--left-ini: 0vw;
		--left-end: 8vw;
		-webkit-animation: snowfall 10s linear infinite;
		animation: snowfall 10s linear infinite;
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
		left: 62vw;
	}

	.snowflake:nth-child(12) {
		--size: 0.4vw;
		--left-ini: 2vw;
		--left-end: -7vw;
		-webkit-animation: snowfall 8s linear infinite;
		animation: snowfall 8s linear infinite;
		-webkit-animation-delay: -10s;
		animation-delay: -10s;
		left: 44vw;
	}

	.snowflake:nth-child(13) {
		--size: 0.1vw;
		--left-ini: -8vw;
		--left-end: 8vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 8vw;
	}

	.snowflake:nth-child(14) {
		--size: 0.6vw;
		--left-ini: 2vw;
		--left-end: 8vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
		left: 62vw;
	}

	.snowflake:nth-child(15) {
		--size: 0.1vw;
		--left-ini: -1vw;
		--left-end: 6vw;
		-webkit-animation: snowfall 10s linear infinite;
		animation: snowfall 10s linear infinite;
		-webkit-animation-delay: -9s;
		animation-delay: -9s;
		left: 68vw;
	}

	.snowflake:nth-child(16) {
		--size: 0.2vw;
		--left-ini: 4vw;
		--left-end: -1vw;
		-webkit-animation: snowfall 8s linear infinite;
		animation: snowfall 8s linear infinite;
		-webkit-animation-delay: -8s;
		animation-delay: -8s;
		left: 52vw;
	}

	.snowflake:nth-child(17) {
		--size: 0.5vw;
		--left-ini: -5vw;
		--left-end: 3vw;
		-webkit-animation: snowfall 11s linear infinite;
		animation: snowfall 11s linear infinite;
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
		left: 24vw;
	}

	.snowflake:nth-child(18) {
		--size: 0.6vw;
		--left-ini: -2vw;
		--left-end: -8vw;
		-webkit-animation: snowfall 10s linear infinite;
		animation: snowfall 10s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 84vw;
	}

	.snowflake:nth-child(19) {
		--size: 0.5vw;
		--left-ini: 7vw;
		--left-end: -7vw;
		-webkit-animation: snowfall 6s linear infinite;
		animation: snowfall 6s linear infinite;
		-webkit-animation-delay: -8s;
		animation-delay: -8s;
		left: 50vw;
	}

	.snowflake:nth-child(20) {
		--size: 0.6vw;
		--left-ini: -2vw;
		--left-end: 6vw;
		-webkit-animation: snowfall 9s linear infinite;
		animation: snowfall 9s linear infinite;
		-webkit-animation-delay: -3s;
		animation-delay: -3s;
		left: 51vw;
	}

	.snowflake:nth-child(21) {
		--size: 0.1vw;
		--left-ini: -9vw;
		--left-end: -7vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -10s;
		animation-delay: -10s;
		left: 31vw;
	}

	.snowflake:nth-child(22) {
		--size: 0.3vw;
		--left-ini: -5vw;
		--left-end: 6vw;
		-webkit-animation: snowfall 6s linear infinite;
		animation: snowfall 6s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 16vw;
	}

	.snowflake:nth-child(23) {
		--size: 0.5vw;
		--left-ini: -5vw;
		--left-end: -4vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
		left: 69vw;
	}

	.snowflake:nth-child(24) {
		--size: 0.5vw;
		--left-ini: -2vw;
		--left-end: 7vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 3vw;
	}

	.snowflake:nth-child(25) {
		--size: 0.6vw;
		--left-ini: -8vw;
		--left-end: -1vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 44vw;
	}

	.snowflake:nth-child(26) {
		--size: 0.1vw;
		--left-ini: 6vw;
		--left-end: -1vw;
		-webkit-animation: snowfall 8s linear infinite;
		animation: snowfall 8s linear infinite;
		-webkit-animation-delay: -8s;
		animation-delay: -8s;
		left: 70vw;
	}

	.snowflake:nth-child(27) {
		--size: 0.4vw;
		--left-ini: -5vw;
		--left-end: 10vw;
		-webkit-animation: snowfall 10s linear infinite;
		animation: snowfall 10s linear infinite;
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
		left: 43vw;
	}

	.snowflake:nth-child(28) {
		--size: 0.1vw;
		--left-ini: 3vw;
		--left-end: -7vw;
		-webkit-animation: snowfall 13s linear infinite;
		animation: snowfall 13s linear infinite;
		-webkit-animation-delay: -7s;
		animation-delay: -7s;
		left: 88vw;
	}

	.snowflake:nth-child(29) {
		--size: 0.2vw;
		--left-ini: 6vw;
		--left-end: 0vw;
		-webkit-animation: snowfall 9s linear infinite;
		animation: snowfall 9s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 33vw;
	}

	.snowflake:nth-child(30) {
		--size: 0.4vw;
		--left-ini: 0vw;
		--left-end: -6vw;
		-webkit-animation: snowfall 6s linear infinite;
		animation: snowfall 6s linear infinite;
		-webkit-animation-delay: -8s;
		animation-delay: -8s;
		left: 78vw;
	}

	.snowflake:nth-child(31) {
		--size: 0.5vw;
		--left-ini: 8vw;
		--left-end: 6vw;
		-webkit-animation: snowfall 11s linear infinite;
		animation: snowfall 11s linear infinite;
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
		left: 39vw;
	}

	.snowflake:nth-child(32) {
		--size: 0.4vw;
		--left-ini: 2vw;
		--left-end: 0vw;
		-webkit-animation: snowfall 11s linear infinite;
		animation: snowfall 11s linear infinite;
		-webkit-animation-delay: -2s;
		animation-delay: -2s;
		left: 19vw;
	}

	.snowflake:nth-child(33) {
		--size: 0.1vw;
		--left-ini: 1vw;
		--left-end: 5vw;
		-webkit-animation: snowfall 10s linear infinite;
		animation: snowfall 10s linear infinite;
		-webkit-animation-delay: -3s;
		animation-delay: -3s;
		left: 63vw;
	}

	.snowflake:nth-child(34) {
		--size: 0.6vw;
		--left-ini: 5vw;
		--left-end: 10vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
		left: 66vw;
	}

	.snowflake:nth-child(35) {
		--size: 0.6vw;
		--left-ini: -1vw;
		--left-end: -8vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 1vw;
	}

	.snowflake:nth-child(36) {
		--size: 0.2vw;
		--left-ini: 5vw;
		--left-end: 0vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -3s;
		animation-delay: -3s;
		left: 47vw;
	}

	.snowflake:nth-child(37) {
		--size: 0.1vw;
		--left-ini: -4vw;
		--left-end: 1vw;
		-webkit-animation: snowfall 13s linear infinite;
		animation: snowfall 13s linear infinite;
		-webkit-animation-delay: -7s;
		animation-delay: -7s;
		left: 49vw;
	}

	.snowflake:nth-child(38) {
		--size: 0.5vw;
		--left-ini: 5vw;
		--left-end: -2vw;
		-webkit-animation: snowfall 12s linear infinite;
		animation: snowfall 12s linear infinite;
		-webkit-animation-delay: -8s;
		animation-delay: -8s;
		left: 70vw;
	}

	.snowflake:nth-child(39) {
		--size: 0.5vw;
		--left-ini: 8vw;
		--left-end: -1vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -5s;
		animation-delay: -5s;
		left: 43vw;
	}

	.snowflake:nth-child(40) {
		--size: 0.4vw;
		--left-ini: -6vw;
		--left-end: 3vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -2s;
		animation-delay: -2s;
		left: 81vw;
	}

	.snowflake:nth-child(41) {
		--size: 0.3vw;
		--left-ini: 7vw;
		--left-end: -2vw;
		-webkit-animation: snowfall 11s linear infinite;
		animation: snowfall 11s linear infinite;
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
		left: 3vw;
	}

	.snowflake:nth-child(42) {
		--size: 0.6vw;
		--left-ini: 8vw;
		--left-end: 7vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 64vw;
	}

	.snowflake:nth-child(43) {
		--size: 0.1vw;
		--left-ini: -3vw;
		--left-end: 7vw;
		-webkit-animation: snowfall 13s linear infinite;
		animation: snowfall 13s linear infinite;
		-webkit-animation-delay: -5s;
		animation-delay: -5s;
		left: 95vw;
	}

	.snowflake:nth-child(44) {
		--size: 0.3vw;
		--left-ini: -3vw;
		--left-end: 5vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -5s;
		animation-delay: -5s;
		left: 18vw;
	}

	.snowflake:nth-child(45) {
		--size: 0.2vw;
		--left-ini: 7vw;
		--left-end: -8vw;
		-webkit-animation: snowfall 12s linear infinite;
		animation: snowfall 12s linear infinite;
		-webkit-animation-delay: -9s;
		animation-delay: -9s;
		left: 37vw;
	}

	.snowflake:nth-child(46) {
		--size: 0.5vw;
		--left-ini: -4vw;
		--left-end: -9vw;
		-webkit-animation: snowfall 12s linear infinite;
		animation: snowfall 12s linear infinite;
		-webkit-animation-delay: -5s;
		animation-delay: -5s;
		left: 54vw;
	}

	.snowflake:nth-child(47) {
		--size: 0.5vw;
		--left-ini: 5vw;
		--left-end: 7vw;
		-webkit-animation: snowfall 11s linear infinite;
		animation: snowfall 11s linear infinite;
		-webkit-animation-delay: -2s;
		animation-delay: -2s;
		left: 89vw;
	}

	.snowflake:nth-child(48) {
		--size: 0.4vw;
		--left-ini: 8vw;
		--left-end: -3vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -9s;
		animation-delay: -9s;
		left: 61vw;
	}

	.snowflake:nth-child(49) {
		--size: 0.1vw;
		--left-ini: 0vw;
		--left-end: 8vw;
		-webkit-animation: snowfall 9s linear infinite;
		animation: snowfall 9s linear infinite;
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
		left: 60vw;
	}

	.snowflake:nth-child(50) {
		--size: 0.5vw;
		--left-ini: 2vw;
		--left-end: -5vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 18vw;
	}

	.snowflake:nth-child(51) {
		--size: 0.5vw;
		--left-ini: -9vw;
		--left-end: 6vw;
		-webkit-animation: snowfall 6s linear infinite;
		animation: snowfall 6s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 17vw;
	}

	.snowflake:nth-child(52) {
		--size: 0.5vw;
		--left-ini: 4vw;
		--left-end: 7vw;
		-webkit-animation: snowfall 8s linear infinite;
		animation: snowfall 8s linear infinite;
		-webkit-animation-delay: -8s;
		animation-delay: -8s;
		left: 79vw;
	}

	.snowflake:nth-child(53) {
		--size: 0.1vw;
		--left-ini: 8vw;
		--left-end: 5vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -3s;
		animation-delay: -3s;
		left: 44vw;
	}

	.snowflake:nth-child(54) {
		--size: 0.4vw;
		--left-ini: -6vw;
		--left-end: -3vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -2s;
		animation-delay: -2s;
		left: 94vw;
	}

	.snowflake:nth-child(55) {
		--size: 0.3vw;
		--left-ini: -4vw;
		--left-end: 7vw;
		-webkit-animation: snowfall 11s linear infinite;
		animation: snowfall 11s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 49vw;
	}

	.snowflake:nth-child(56) {
		--size: 0.4vw;
		--left-ini: -1vw;
		--left-end: -4vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -10s;
		animation-delay: -10s;
		left: 100vw;
	}

	.snowflake:nth-child(57) {
		--size: 0.3vw;
		--left-ini: 4vw;
		--left-end: 2vw;
		-webkit-animation: snowfall 6s linear infinite;
		animation: snowfall 6s linear infinite;
		-webkit-animation-delay: -10s;
		animation-delay: -10s;
		left: 51vw;
	}

	.snowflake:nth-child(58) {
		--size: 0.3vw;
		--left-ini: -9vw;
		--left-end: 5vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 63vw;
	}

	.snowflake:nth-child(59) {
		--size: 0.4vw;
		--left-ini: 4vw;
		--left-end: 0vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -8s;
		animation-delay: -8s;
		left: 77vw;
	}

	.snowflake:nth-child(60) {
		--size: 0.2vw;
		--left-ini: 7vw;
		--left-end: 2vw;
		-webkit-animation: snowfall 13s linear infinite;
		animation: snowfall 13s linear infinite;
		-webkit-animation-delay: -7s;
		animation-delay: -7s;
		left: 70vw;
	}

	.snowflake:nth-child(61) {
		--size: 0.1vw;
		--left-ini: 4vw;
		--left-end: -2vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -10s;
		animation-delay: -10s;
		left: 60vw;
	}

	.snowflake:nth-child(62) {
		--size: 0.5vw;
		--left-ini: 5vw;
		--left-end: -3vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -7s;
		animation-delay: -7s;
		left: 50vw;
	}

	.snowflake:nth-child(63) {
		--size: 0.3vw;
		--left-ini: 8vw;
		--left-end: 4vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 66vw;
	}

	.snowflake:nth-child(64) {
		--size: 0.1vw;
		--left-ini: 6vw;
		--left-end: -9vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
		left: 27vw;
	}

	.snowflake:nth-child(65) {
		--size: 0.3vw;
		--left-ini: -5vw;
		--left-end: 3vw;
		-webkit-animation: snowfall 10s linear infinite;
		animation: snowfall 10s linear infinite;
		-webkit-animation-delay: -7s;
		animation-delay: -7s;
		left: 61vw;
	}

	.snowflake:nth-child(66) {
		--size: 0.5vw;
		--left-ini: -3vw;
		--left-end: 3vw;
		-webkit-animation: snowfall 11s linear infinite;
		animation: snowfall 11s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 1vw;
	}

	.snowflake:nth-child(67) {
		--size: 0.5vw;
		--left-ini: 5vw;
		--left-end: 8vw;
		-webkit-animation: snowfall 13s linear infinite;
		animation: snowfall 13s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 35vw;
	}

	.snowflake:nth-child(68) {
		--size: 0.6vw;
		--left-ini: 8vw;
		--left-end: 3vw;
		-webkit-animation: snowfall 9s linear infinite;
		animation: snowfall 9s linear infinite;
		-webkit-animation-delay: -8s;
		animation-delay: -8s;
		left: 26vw;
	}

	.snowflake:nth-child(69) {
		--size: 0.3vw;
		--left-ini: -8vw;
		--left-end: -5vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -9s;
		animation-delay: -9s;
		left: 84vw;
	}

	.snowflake:nth-child(70) {
		--size: 0.2vw;
		--left-ini: -7vw;
		--left-end: -5vw;
		-webkit-animation: snowfall 13s linear infinite;
		animation: snowfall 13s linear infinite;
		-webkit-animation-delay: -9s;
		animation-delay: -9s;
		left: 15vw;
	}

	.snowflake:nth-child(71) {
		--size: 0.4vw;
		--left-ini: 0vw;
		--left-end: 6vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 69vw;
	}

	.snowflake:nth-child(72) {
		--size: 0.5vw;
		--left-ini: -9vw;
		--left-end: 8vw;
		-webkit-animation: snowfall 6s linear infinite;
		animation: snowfall 6s linear infinite;
		-webkit-animation-delay: -9s;
		animation-delay: -9s;
		left: 52vw;
	}

	.snowflake:nth-child(73) {
		--size: 0.1vw;
		--left-ini: -8vw;
		--left-end: -4vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -9s;
		animation-delay: -9s;
		left: 49vw;
	}

	.snowflake:nth-child(74) {
		--size: 0.6vw;
		--left-ini: 3vw;
		--left-end: 4vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -5s;
		animation-delay: -5s;
		left: 72vw;
	}

	.snowflake:nth-child(75) {
		--size: 0.3vw;
		--left-ini: 4vw;
		--left-end: -4vw;
		-webkit-animation: snowfall 11s linear infinite;
		animation: snowfall 11s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 48vw;
	}

	.snowflake:nth-child(76) {
		--size: 0.3vw;
		--left-ini: 4vw;
		--left-end: 4vw;
		-webkit-animation: snowfall 6s linear infinite;
		animation: snowfall 6s linear infinite;
		-webkit-animation-delay: -3s;
		animation-delay: -3s;
		left: 9vw;
	}

	.snowflake:nth-child(77) {
		--size: 0.1vw;
		--left-ini: -1vw;
		--left-end: 2vw;
		-webkit-animation: snowfall 12s linear infinite;
		animation: snowfall 12s linear infinite;
		-webkit-animation-delay: -5s;
		animation-delay: -5s;
		left: 15vw;
	}

	.snowflake:nth-child(78) {
		--size: 0.1vw;
		--left-ini: 9vw;
		--left-end: -8vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 42vw;
	}

	.snowflake:nth-child(79) {
		--size: 0.6vw;
		--left-ini: 2vw;
		--left-end: 7vw;
		-webkit-animation: snowfall 6s linear infinite;
		animation: snowfall 6s linear infinite;
		-webkit-animation-delay: -2s;
		animation-delay: -2s;
		left: 33vw;
	}

	.snowflake:nth-child(80) {
		--size: 0.2vw;
		--left-ini: 10vw;
		--left-end: 3vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -2s;
		animation-delay: -2s;
		left: 39vw;
	}

	.snowflake:nth-child(81) {
		--size: 0.5vw;
		--left-ini: 3vw;
		--left-end: 8vw;
		-webkit-animation: snowfall 10s linear infinite;
		animation: snowfall 10s linear infinite;
		-webkit-animation-delay: -3s;
		animation-delay: -3s;
		left: 22vw;
	}

	.snowflake:nth-child(82) {
		--size: 0.4vw;
		--left-ini: 1vw;
		--left-end: -6vw;
		-webkit-animation: snowfall 13s linear infinite;
		animation: snowfall 13s linear infinite;
		-webkit-animation-delay: -10s;
		animation-delay: -10s;
		left: 13vw;
	}

	.snowflake:nth-child(83) {
		--size: 0.4vw;
		--left-ini: -8vw;
		--left-end: -2vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -9s;
		animation-delay: -9s;
		left: 46vw;
	}

	.snowflake:nth-child(84) {
		--size: 0.4vw;
		--left-ini: 4vw;
		--left-end: 8vw;
		-webkit-animation: snowfall 12s linear infinite;
		animation: snowfall 12s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 46vw;
	}

	.snowflake:nth-child(85) {
		--size: 0.3vw;
		--left-ini: -6vw;
		--left-end: 4vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -2s;
		animation-delay: -2s;
		left: 78vw;
	}

	.snowflake:nth-child(86) {
		--size: 0.5vw;
		--left-ini: -1vw;
		--left-end: -4vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -8s;
		animation-delay: -8s;
		left: 44vw;
	}

	.snowflake:nth-child(87) {
		--size: 0.1vw;
		--left-ini: 7vw;
		--left-end: 9vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 56vw;
	}

	.snowflake:nth-child(88) {
		--size: 0.1vw;
		--left-ini: 6vw;
		--left-end: -6vw;
		-webkit-animation: snowfall 8s linear infinite;
		animation: snowfall 8s linear infinite;
		-webkit-animation-delay: -2s;
		animation-delay: -2s;
		left: 28vw;
	}

	.snowflake:nth-child(89) {
		--size: 0.3vw;
		--left-ini: -8vw;
		--left-end: -2vw;
		-webkit-animation: snowfall 11s linear infinite;
		animation: snowfall 11s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 28vw;
	}

	.snowflake:nth-child(90) {
		--size: 0.6vw;
		--left-ini: 0vw;
		--left-end: -6vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 36vw;
	}

	.snowflake:nth-child(91) {
		--size: 0.1vw;
		--left-ini: -3vw;
		--left-end: 0vw;
		-webkit-animation: snowfall 12s linear infinite;
		animation: snowfall 12s linear infinite;
		-webkit-animation-delay: -7s;
		animation-delay: -7s;
		left: 34vw;
	}

	.snowflake:nth-child(92) {
		--size: 0.3vw;
		--left-ini: 9vw;
		--left-end: 8vw;
		-webkit-animation: snowfall 12s linear infinite;
		animation: snowfall 12s linear infinite;
		-webkit-animation-delay: -5s;
		animation-delay: -5s;
		left: 83vw;
	}

	.snowflake:nth-child(93) {
		--size: 0.3vw;
		--left-ini: -7vw;
		--left-end: -8vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 6vw;
	}

	.snowflake:nth-child(94) {
		--size: 0.4vw;
		--left-ini: -5vw;
		--left-end: -2vw;
		-webkit-animation: snowfall 12s linear infinite;
		animation: snowfall 12s linear infinite;
		-webkit-animation-delay: -3s;
		animation-delay: -3s;
		left: 41vw;
	}

	.snowflake:nth-child(95) {
		--size: 0.6vw;
		--left-ini: -1vw;
		--left-end: -9vw;
		-webkit-animation: snowfall 15s linear infinite;
		animation: snowfall 15s linear infinite;
		-webkit-animation-delay: -7s;
		animation-delay: -7s;
		left: 6vw;
	}

	.snowflake:nth-child(96) {
		--size: 0.2vw;
		--left-ini: 9vw;
		--left-end: 1vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -10s;
		animation-delay: -10s;
		left: 88vw;
	}

	.snowflake:nth-child(97) {
		--size: 0.5vw;
		--left-ini: -9vw;
		--left-end: 9vw;
		-webkit-animation: snowfall 11s linear infinite;
		animation: snowfall 11s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 9vw;
	}

	.snowflake:nth-child(98) {
		--size: 0.4vw;
		--left-ini: -7vw;
		--left-end: -5vw;
		-webkit-animation: snowfall 7s linear infinite;
		animation: snowfall 7s linear infinite;
		-webkit-animation-delay: -3s;
		animation-delay: -3s;
		left: 89vw;
	}

	.snowflake:nth-child(99) {
		--size: 0.2vw;
		--left-ini: -9vw;
		--left-end: 3vw;
		-webkit-animation: snowfall 6s linear infinite;
		animation: snowfall 6s linear infinite;
		-webkit-animation-delay: -4s;
		animation-delay: -4s;
		left: 38vw;
	}

	.snowflake:nth-child(100) {
		--size: 0.4vw;
		--left-ini: 8vw;
		--left-end: -1vw;
		-webkit-animation: snowfall 14s linear infinite;
		animation: snowfall 14s linear infinite;
		-webkit-animation-delay: -6s;
		animation-delay: -6s;
		left: 54vw;
	}

	.snowflake:nth-child(6n) {
		filter: blur(1px);
	}

	.snowflake:nth-child(11n) {
		filter: blur(3px);
	}
</style>

<script lang="ts">
	const SNOWFLAKES_COUNT = 100; // on firefox should go smoothly up to 750
	const SNOW_ICONS = ['❆', '❅', '❄'];

	// this function generates the random configuration with all necessary values
	function randomSnowflakeConfig(i: number) {
		return {
			snowIcon: SNOW_ICONS[i % SNOW_ICONS.length]
		};
	}

	// actially generating the snowflakes
	let snowflakes = new Array(SNOWFLAKES_COUNT)
		.fill(undefined)
		.map((_, i) => randomSnowflakeConfig(i));
</script>

<div class="fixed h-screen w-screen inset-0 pointer-events-none z-100" aria-hidden="true">
	{#each snowflakes as flake}
		<div class="snowflake">
			{flake.snowIcon}
		</div>
	{/each}
</div>
