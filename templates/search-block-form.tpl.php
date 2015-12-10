<?php

/**
 * @file
 * Displays the search form block.
 *
 * Available variables:
 * - $search_form: The complete search form ready for print.
 * - $search: Associative array of search elements. Can be used to print each
 *   form element separately.
 *
 * Default elements within $search:
 * - $search['search_block_form']: Text input area wrapped in a div.
 * - $search['actions']: Rendered form buttons.
 * - $search['hidden']: Hidden form elements. Used to validate forms when
 *   submitted.
 *
 * Modules can add to the search form, so it is recommended to check for their
 * existence before printing. The default keys will always exist. To check for
 * a module-provided field, use code like this:
 * @code
 *   <?php if (isset($search['extra_field'])): ?>
 *     <div class="extra-field">
 *       <?php print $search['extra_field']; ?>
 *     </div>
 *   <?php endif; ?>
 * @endcode
 *
 * @see template_preprocess_search_block_form()
 */
?>
<nav class="menu">
	<div class="item ea"><a href="http://ea.fflch.usp.br/lista-de-verbetes">EA</a></div>
    <ul class="active">
        <li class="item smallcaps"><a href="http://ea.fflch.usp.br/indice-alfabetico">índice alfabético</a></li>
        <li class="item smallcaps expande">
            <a href="http://ea.fflch.usp.br/home">A Enciclopédia</a>
            <div class="expandidos">
                <a href="http://ea.fflch.usp.br/orientacao-geral-da-obra">Orientação aos colaboradores</a>
                <a href="http://ea.fflch.usp.br/indice-de-colaboradores">Índice dos colaboradores</a>
            </div>
        </li>
    	<li class="item">
    		<div class="item container-inline">
				<?php if (empty($variables['form']['#block']->subject)): ?>
				  <h2 class="element-invisible"><?php print t('Search form'); ?></h2>
				<?php endif; ?>
				<?php print $search_form; ?>
			</div>
    	</li>
    </ul>
 
    <a class="toggle-nav" href="#">&#9776;</a>

</nav>
