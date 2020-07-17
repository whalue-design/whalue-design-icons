// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SnippetsTwoToneSvg from '@whalue-design/icons-svg/lib/asn/SnippetsTwoTone';

export default {
  name: 'IconSnippetsTwoTone',
  displayName: 'SnippetsTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SnippetsTwoToneSvg } },
      children,
    ),
};