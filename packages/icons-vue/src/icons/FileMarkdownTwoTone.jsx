// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileMarkdownTwoToneSvg from '@whalue-design/icons-svg/lib/asn/FileMarkdownTwoTone';

export default {
  name: 'IconFileMarkdownTwoTone',
  displayName: 'FileMarkdownTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileMarkdownTwoToneSvg } },
      children,
    ),
};