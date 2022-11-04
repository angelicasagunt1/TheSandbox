<?php

class TrieNode
{
	public $isEnd = false;
	public $children = [];
}

class Trie {

	public $node = null;

	public function __construct()
	{
		$this->node = new TrieNode();
	}

	public function insert($word)
	{
		$count = strlen($word);
		$node = $this->node;
		for ($i = 0; $i < $count; $i++) {
			$char = $word[$i];
			if (array_key_exists($char, $node->children)) {
				$node = $node->children[$char];
				continue;
			}
			$node->children[$char] = new TrieNode();
			$node = $node->children[$char];
		}
		$node->isEnd = true;
	}
	
	public function search($word): bool
	{
		$count = strlen($word);
		$node = $this->node;
		for ($i = 0; $i < $count; $i++) {
			$char = $word[$i];
			if (!array_key_exists($char, $node->children)) {
				return false;
			}
			$node = $node->children[$char];
		}

		return $node->isEnd;
	}
}

	$keys = array("fred","frank","jerry");
    
	$t = new Trie();

	foreach ($keys as $key) {
		$t->insert($key);
	}

?>
